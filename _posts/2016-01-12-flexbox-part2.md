---
layout: post
title: Learning CSS Flexbox, on justifying content [Part 2]
category: CSS
tags: css, flex, flex box
author: Russell Morgan
---

Last week we dipped a toe into the surprisingly warm waters of Flexbox and found out how easy it was to make a standard nav. In today's lesson we're going to look at how to justify the content inside your flex container using the aptly named `justify-content` flex attribute.

Here's how we last left our very basic nav:

{% highlight html %}
<style>
  .my-flex-navigation {
    display:flex; 
    list-style:none;
    background:#ccc 
  } 
</style>

<ul class="my-flex-navigation"> 
  <li>List item 1</li> 
  <li>List item 2</li> 
  <li>List item 3</li> 
</ul>
{% endhighlight %}

Which gave us this as a result:

<style>
.my-flex-navigation {display:flex; list-style:none; background:#ccc; padding:0 } 
</style>

<ul class="my-flex-navigation"> <li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ul>

The justify-content attribute has five different options, starting with the default value you've already seen they are as follows:

* flex-start: justify the items at the beginning of the flex container
* flex-end: justify the items at the end of the flex container. An easier way to think about this one is floating items to the right
* center: puts all your items in the center of the flex container. This is the margin:auto of the flexbox world
* space-between: This is where it gets kind of weird, this option puts an equal amount of space between each item so that the content fits the entire flexbox
* space-around: If you took space-between and center and they had a baby that's what this is. it centers all the items and then puts an equal amount of space between them.

Here's what our nav looks like with the above values. For this art I've added a 2px border around each item to better illustrate what's happening.

<style>
.my-flex-navigation {display:flex; list-style:none; background:#ccc; } 
.my-flex-navigation li { border:2px solid #000; }
</style>

**JUSTIFY-CONTENT:FLEX-END**
<ul class="my-flex-navigation" style="justify-content:flex-end"> <li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ul>

**JUSTIFY-CONTENT:CENTER**
<ul class="my-flex-navigation" style="justify-content:center"> <li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ul>

**JUSTIFY-CONTENT:SPACE-BETWEEN**
<ul class="my-flex-navigation" style="justify-content:space-between"> <li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ul>

**JUSTIFY-CONTENT:SPACE-AROUND**
<ul class="my-flex-navigation" style="justify-content:space-around"> <li>List item 1</li> <li>List item 2</li> <li>List item 3</li> </ul>

Now we're starting to see a little of what flexbx can do but I imagine you're thinking something like "that's all well and good but I can already do that with some margins and floats". Well, stay tuned for the next post when I show you a nice trick flexbox has built-in to deal with a layout issue every developer has faced with a sigh.