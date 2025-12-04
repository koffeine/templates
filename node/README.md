# Koffeine's node project template

Template for a Node.js project.

## Usage

```sh
npx degit koffeine/templates/node <dir>

cd <dir>

git init
git add .

npm ci
```

## Docker

__Build__

```sh
docker build -t node .
```

__docker run__

```sh
docker run \
	--rm \
	node
```

__compose.yaml__

```yaml
services:
	node:
		image: node
```
