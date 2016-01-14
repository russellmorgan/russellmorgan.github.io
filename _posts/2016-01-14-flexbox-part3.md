---
layout: post
title: Learning CSS Flexbox, aligning items [Part 3]
category: CSS
tags: css, flex, flex box
author: Russell Morgan
---

Quick catch up: in the past two lessons we've learned how to lay out the most basic flexbox container possible and then justify the items within. For the most part this is just a less troublesome way to float things left and right or center with margin:auto. You may even have gotten this far and wondered why anyone would really bother learning flexbox so let me introduce you to the **align-items** attribute.

To illustrate this example I'm going to take a detour from our previous nav code sample and make a flexbox container with some items that should have different heights using the following code:

{% highlight html %}
<style>
    .my-flex-container {
      display:flex;
    }
    .my-flex-container div {
      background:#ccc;
      padding:.25rem;
      margin:.25rem;
    }
</style>

<div class="my-flex-container">
    <div>Door number one.</div>
    <div>Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit....etc.</div>
    <div>Door number three.</div>
</div>
{% endhighlight %}

<style>
    .my-flex-container {
      display:flex;
      font-size:.75rem;
      margin-bottom:1.25rem;
    }
    .my-flex-container div {
      background:#ccc;
      padding:.25rem;
      margin:.25rem;
    }
</style>

<div class="my-flex-container">
    <div>Door number one.</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nisi vitae sem suscipit condimentum ac in metus. Sed efficitur leo vel aliquet consectetur. Vestibulum tempus, tellus ac aliquam aliquam, eros mauris iaculis nisi, in tempus velit odio sit amet justo. In ultrices lectus id elit venenatis tempus sit amet nec ante. Quisque id sapien sed felis pretium blandit. Etiam semper, elit vel commodo varius, arcu lacus tincidunt dui, sed cursus magna quam ut sem. Proin efficitur, tortor nec vulputate pretium, nisl enim volutpat dui, ut tempus magna neque vitae nisi. Etiam pulvinar condimentum ligula ac dictum. Duis augue nunc, pellentesque sit amet venenatis vitae, sagittis in lectus. Nunc non vehicula nisi, non dapibus odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
    <div>Door number three.</div>
</div>



The first time saver you get without changing a thing is all the items inside the flexbox are the same height, regardless of the content. That's because the default setting for align-items is **stretch**. How many times have you had to deal with that layout issue? Goodbye javascript DOM hacks!

Let's check out the other options:

**ALIGN-ITEMS: FLEX-START**<br>
More like what you're used to in a pre-flexbox world
<div class="my-flex-container" style="align-items:flex-start">
    <div>Door number one.</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nisi vitae sem suscipit condimentum ac in metus. Sed efficitur leo vel aliquet consectetur. Vestibulum tempus, tellus ac aliquam aliquam, eros mauris iaculis nisi, in tempus velit odio sit amet justo. In ultrices lectus id elit venenatis tempus sit amet nec ante. Quisque id sapien sed felis pretium blandit. Etiam semper, elit vel commodo varius, arcu lacus tincidunt dui, sed cursus magna quam ut sem. Proin efficitur, tortor nec vulputate pretium, nisl enim volutpat dui, ut tempus magna neque vitae nisi. Etiam pulvinar condimentum ligula ac dictum. Duis augue nunc, pellentesque sit amet venenatis vitae, sagittis in lectus. Nunc non vehicula nisi, non dapibus odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
    <div>Door number three.</div>
</div>


**ALIGN-ITEMS: FLEX-END**<br>
Now all the items align to the bottom of the flexbox
<div class="my-flex-container" style="align-items:flex-end">
    <div>Door number one.</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nisi vitae sem suscipit condimentum ac in metus. Sed efficitur leo vel aliquet consectetur. Vestibulum tempus, tellus ac aliquam aliquam, eros mauris iaculis nisi, in tempus velit odio sit amet justo. In ultrices lectus id elit venenatis tempus sit amet nec ante. Quisque id sapien sed felis pretium blandit. Etiam semper, elit vel commodo varius, arcu lacus tincidunt dui, sed cursus magna quam ut sem. Proin efficitur, tortor nec vulputate pretium, nisl enim volutpat dui, ut tempus magna neque vitae nisi. Etiam pulvinar condimentum ligula ac dictum. Duis augue nunc, pellentesque sit amet venenatis vitae, sagittis in lectus. Nunc non vehicula nisi, non dapibus odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
    <div>Door number three.</div>
</div>


**ALIGN-ITEMS: CENTER**<br>
All the items line up on the imaginary center line of the flexbox. (this is technically called the main-axis)
<div class="my-flex-container" style="align-items:center">
    <div>Door number one.</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nisi vitae sem suscipit condimentum ac in metus. Sed efficitur leo vel aliquet consectetur. Vestibulum tempus, tellus ac aliquam aliquam, eros mauris iaculis nisi, in tempus velit odio sit amet justo. In ultrices lectus id elit venenatis tempus sit amet nec ante. Quisque id sapien sed felis pretium blandit. Etiam semper, elit vel commodo varius, arcu lacus tincidunt dui, sed cursus magna quam ut sem. Proin efficitur, tortor nec vulputate pretium, nisl enim volutpat dui, ut tempus magna neque vitae nisi. Etiam pulvinar condimentum ligula ac dictum. Duis augue nunc, pellentesque sit amet venenatis vitae, sagittis in lectus. Nunc non vehicula nisi, non dapibus odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
    <div>Door number three.</div>
</div>


**ALIGN-ITEMS: BASELINE**<br>
It's a little hard to see how this is different from flex-start but essentially it's aligning everything along the baseline of the first line of text. Designers will love you for this one.
<div class="my-flex-container" style="align-items:baseline">
    <div><p>Door number one.</p></div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nisi vitae sem suscipit condimentum ac in metus. Sed efficitur leo vel aliquet consectetur. Vestibulum tempus, tellus ac aliquam aliquam, eros mauris iaculis nisi, in tempus velit odio sit amet justo. In ultrices lectus id elit venenatis tempus sit amet nec ante. Quisque id sapien sed felis pretium blandit. Etiam semper, elit vel commodo varius, arcu lacus tincidunt dui, sed cursus magna quam ut sem. Proin efficitur, tortor nec vulputate pretium, nisl enim volutpat dui, ut tempus magna neque vitae nisi. Etiam pulvinar condimentum ligula ac dictum. Duis augue nunc, pellentesque sit amet venenatis vitae, sagittis in lectus. Nunc non vehicula nisi, non dapibus odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</div>
    <div>Door number three.</div>
</div>

Thanks to flexbox you now have a quick and easy way to line items up on **both** the vertical and horizontal axis and it only took a few css attributes. Next lesson we'll discuss what to do when you want your content to display over multiple lines and how to align it all so that it looks great. Its sort of like the lesson, only turbocharged.