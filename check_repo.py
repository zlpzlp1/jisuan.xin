import urllib.request, json
req = urllib.request.Request('https://api.github.com/repos/zlpzlp1/jisuan.xin/contents/', headers={'User-Agent': 'jisuan'})
r = urllib.request.urlopen(req, timeout=10)
data = json.loads(r.read())
for item in data:
    print(item['name'], item['type'])
print('OK', len(data))
