# NextJS Template

This is my repository to learn how to publish a nextjs template onto Github pages. With files prebuilt on my local machine.

I just had to make sure I added this line in `next.config.ts`
```
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
};
```

While developing, I used
```
npm run dev
```

Then once I am done
```
npm run build
```

Finally, to publish to gh-pages branch as a subtree (I needed to install git-subtree on Fedora)
```
git subtree push --prefix out/ origin gh-pages
```

After, that the setup on github pages was just to enable it and deploy it from the `gh-pages` branch at the root.


