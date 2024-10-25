# Watch Mode In TypeScript

## For One File

`tsc fileName --watch`

## For All files In Folder/Project

`tsc --init` This will create tsconfig.json file.
`tsc --watch` OR `tsc -w`

## Set directories

- TypeScript file => tsconfig => rootDir => ./src
- JavScript file => tsconfig => rootDir => ./dist

## Exclude any folder:

`{
    "exclude":["folderName"],
    "include":["folderName"]
}`