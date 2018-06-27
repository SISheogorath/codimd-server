Tips and Tricks
===

## URLs in printview

In PDFs created with Chrome/-ium links are clickable. this makes adding the URL after the link obsolete. At the same time of course it makes sense to add them for prints to paper. This little snippet hides the links for PDFs by Chrome/-ium.

Just add it to the end:

```html
<style>
@media print {
    a[href]::after {
        content: none !important;
    }
}
</style>
```

Source: https://github.com/hackmdio/codimd/issues/535#issuecomment-334872161


## Spoiler

If you want to hide some content but still want to keep all content:

```html
<details>
<summary>OMG DETAILS</summary>
any amount of stuff could go here
</details>
```

You can also beautify it a bit:

```html
<style>
summary::before {
    content: "open me";
}
</style>
```

Source: https://github.com/hackmdio/codimd/issues/445#issuecomment-302103241
