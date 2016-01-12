---
layout: post
title: Learning CSS Flexbox, our first flex box [Part 1]
category: CSS
tags: css, flex, flex box
author: Russell Morgan
---

Welcome to learning aout CSS Flexbox, better known as your new layout best friend. By the time I'm done writing this series of posts about CSS flex box I want you to be the sort of convert that looks back at using floats for layout tasks and shakes their head in dismay, not unlike the way we once did about table based layouts. I think that once you get the hang of them your responsive, fluid skills will take on a new ninja like quality. But don't my word for it, almost everyone's favorite front end frame Bootstrap will be going flexbox in version 4. [Here's more info from their alpha docs.](http://v4-alpha.getbootstrap.com/getting-started/flexbox/)

So let's get started with what the CSS flexible box is shall we? Here's what the [W3C](https://www.w3.org/TR/css-flexbox-1/) has to say about the technology:

>The specification describes a CSS box model optimized for user interface design. In the flex layout model, the children of a flex container can be laid out in any direction, and can “flex” their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment of the children can be easily manipulated. Nesting of these boxes (horizontal inside vertical, or vertical inside horizontal) can be used to build layouts in two dimensions.

This is one of the few times I think the W3C has written a clear abstract, which is a good sign. I just wish the syntax itself was a bit easier to remember but that's a small price to pay. The only other negative (as of this writing) is that flex only works in IE10 and above so if you plan to support something even Microsoft is dropping you'll have to write some extra CSS for those older browsers. (Not a big deal as you'll see in a future post about backwards compatibility)

The easiest way to wrap your head around flex boxes is to remember they have two basic components:

* The flex container
* The flex items inside the container

With this first lesson we just want to get our feet wet so we're going to discuss the flex container and ignore flex items for now. Let's start with creating a standard horizontal navigation menu. Most developers who give a fig about semantic layouts would probably code an unordered list like this:

```<ul class="my-navigation"> <li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ul>```

Then add the basic following styling:

```<style> .my-navigation {list-style:none; overflow:hidden } .my-navigation li { float: left } </style>```

Which would give us something like this:

<style>
.my-navigation {list-style:none; background:#eee; overflow:hidden } .my-navigation li { float: left }
</style>

<ul class="my-navigation"> <li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ul>

Easy enough but we have to add "overflow:hidden" property to all the list items to get around the weirdness of css floats if we want any sort of styling to work, like my example background color.

Now let's tackle the same task using just a sprinkle of flex box. We keep the same HTML as above but change the CSS to look like this:

```<style> .my-flex-navigation {display:flex; list-style:none } </style>```

<style>
.my-flex-navigation {display:flex; list-style:none; background:#ccc } 
</style>

<ul class="my-flex-navigation"> <li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ul>

By switching over to flex we've been able to save ourselves time and debug worries by not having to worry about adding a float to the <li> items and an overflow property to <ul>. Add some padding to the items and you have yourself a perfectly basic main nav. Now let's pretend for a moment that you've styled each item to perfection and someone came along and asked you if the menu could display vertically instead of horizontally because everything doesn't fit on mobile devices anymore. With the original example we'd remove the floats and clean things up from there. In a flex world we simply add the following: `flex-direction:column` and boom, our list goes vertical:

<ul class="my-flex-navigation" style="flex-direction:column"> <li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ul>

It gets cooler from there because let's say your data is coming in backwards and you need to reverse the order. Instead of filing a bug and waiting for a back end engineer you just use `flex-direction:column-reverse` and suddenly everything lists the way you wanted in the first place:

<ul class="my-flex-navigation" style="flex-direction:column-reverse"> <li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ul>

Woah, now the last <li> is first. Those of you sitting in the first row will have probably guessed by now that `flex-direction:row` is the default and the assigning `flex-direction:row-reverse` will reverse the items in our first horizontal menu example.

To sum up this intro you can think of the flex container as as block level element that can lay out it's children as either rows or columns by source order. With one attribute change we can reverse the source order or the layout direction. And while my example used an unordered list there's no reason you can't use a different element, such `<nav>` or even a plain `<div>` and assign it the CSS of `display:flex`. 

Here's a [JSFiddle](https://jsfiddle.net/rustbucket/8o1vu228/1/) to let you start playing around with the example code and get comfortable. I hope by this point you'll be tempted to add basic flexbox elements to your layouts without worrying about all hell breaking loose. Next up we'll go through how to add tweak the layout of the flex box items with just a few CSS attributes, it gets a lot a lot more exciting from here...

In case you can't wait or don't feel like being drip fed this info as I get to writing each part here's a couple of good resources:

* [CSS Tricks "complete guide to Flexbox"](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Learn by watching videos:](http://flexbox.io/#/)
