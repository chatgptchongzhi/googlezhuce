const fs=require('fs'),path=require('path');
module.exports=function(root){
 const index=path.join(root,'content/index.json');
 const posts=JSON.parse(fs.readFileSync(index,'utf8'));
 const dir=path.join(root,'content/posts');
 for(const file of fs.readdirSync(dir).filter(x=>x.endsWith('.json')).sort()){
  const p=JSON.parse(fs.readFileSync(path.join(dir,file),'utf8'));
  for(const key of ['title','description','slug','date','modified','tag'])if(!p[key])throw new Error(file+': missing '+key);
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug))throw new Error('Invalid slug');
  p.source='content/posts/'+p.slug+'.md';p.path='guides/'+p.slug+'/';
  if(!fs.existsSync(path.join(root,p.source)))throw new Error('Missing '+p.source);
  const at=posts.findIndex(x=>x.slug===p.slug);
  if(at>=0){if(posts[at].path!==p.path)throw new Error('Cannot change published URL');posts[at]={...posts[at],...p};}else posts.push(p);
 }
 fs.writeFileSync(index,JSON.stringify(posts,null,2)+'\n');return posts;
};
