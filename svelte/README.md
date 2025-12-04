# Koffeine's svelte project template

Template for a Svelte project.

## Usage

```sh
npx degit koffeine/templates/svelte <dir>

cd <dir>

git init
git add .

npm ci
```

## Replace

- index.html: title

## Docker

__Build__

```sh
npm run build
docker build -t svelte .
```

__docker run__

```sh
docker run \
	-p 80:80 \
	--rm \
	svelte
```

__compose.yaml__

```yaml
services:
    svelte:
        image: svelte
        ports:
            - 80:80
```
