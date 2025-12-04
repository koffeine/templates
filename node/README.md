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
	-e NODE_ENV=production \
	--rm \
	node
```

__compose.yaml__

```yaml
services:
    node:
        image: node
        environment:
            - NODE_ENV=production=dev
```
