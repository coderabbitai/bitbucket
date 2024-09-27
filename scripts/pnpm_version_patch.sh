#!/bin/sh

VERSION=$(pnpm version patch --no-git-tag-version)

echo 'Do you want to publish @coderabbitai/bitbucket@'$VERSION'? (y/n) '
read Y
if [ "$Y" = "y" ]; then
	echo "Publishing version $VERSION"
else
	git checkout -- package.json
	exit 1
fi

git commit --all --message "🔖 $VERSION"
git tag --annotate --message "🔖 $VERSION" --sign $VERSION
git push
git push --tags

gh release create $VERSION --generate-notes --title $VERSION --verify-tag
