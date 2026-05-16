import base64, json, urllib.request

creds = base64.b64encode(b'zlpzlp1:jyj168168').decode()
req = urllib.request.Request('https://api.github.com/user', headers={
    'Authorization': 'Basic ' + creds,
    'User-Agent': 'jisuan-deploy'
})
r = urllib.request.urlopen(req, timeout=10)
user = json.loads(r.read())
print('登录成功:', user['login'], '/', user.get('name', ''))

# 检查仓库
req2 = urllib.request.Request('https://api.github.com/repos/zlpzlp1/jisuan.xin', headers={
    'Authorization': 'Basic ' + creds,
    'User-Agent': 'jisuan-deploy'
})
r2 = urllib.request.urlopen(req2, timeout=10)
repo = json.loads(r2.read())
print('仓库:', repo['name'], '| default_branch:', repo['default_branch'])
print('文件:', repo['contents_url'][:60])
