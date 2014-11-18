---
layout: page
title: Navigation
permalink: /patterns/navigation/
resource: true
categories: Patterns
---

This is one of the most important patterns for all websites and applications. Without great navigation the content cannot be discovered by the user. Using our CSS Toolkit, you will have access to several navigation patterns.

### Generic List
This list can be used for groups of links related to the same topic, for example news or file downloads. This is exactly the same pattern that is used for our sidebar navigation on the left.

###### Preview
<div class="preview plain">
  <nav class="sub-nav">
    <div class="pure-menu pure-menu-open">
      <h6 class="pure-menu-heading">Category Title</h6>
      <ul>
        <li><a href="#">Link #1</a></li>
        <li><a href="#">Link #2</a></li>
        <li><a href="#">Link #3</a></li>
        <li><a href="#">Link #4</a></li>
      </ul>
    </div>
  </nav>
</div>

###### Markup
{% highlight html %}
<nav class="sub-nav">
  <div class="pure-menu pure-menu-open">
    <h6 class="pure-menu-heading">Category Title</h6>
    <ul>
      <li><a href="#">Link #1</a></li>
      <li><a href="#">Link #2</a></li>
      <li><a href="#">Link #3</a></li>
      <li><a href="#">Link #4</a></li>
    </ul>
  </div>
</nav>
{% endhighlight %}

### Section Navigation
This pattern is used whenever a deeper structure of links is required (no more than 2-levels down), especially when working with Drupal menus. You can see it live on [WFP Careers](http://www.wfp.org/careers) pages.

###### Preview
<div class="preview plain">
  <nav class="side-nav">
    <ul class="menu level-1">
      <li class="first"><a href="/careers/onlinecv" title="Create and Edit Your CV">Create and Edit Your CV</a></li>
      <li class="expanded">
        <h6 class="menu-group">Vacancies</h6>
        <ul class="menu level-2">
          <li class="first"><a href="/careers/international-professionals" title="International Professionals">International Professionals</a></li>
          <li><a href="/careers/national-professionals" title="National Professionals">National Professionals</a></li>
          <li><a href="/careers/general-service" title="General Service Staff">General Service Staff</a></li>
          <li><a href="/careers/short-term-consultancies" title="Short-Term or Consultancies">Short-Term or Consultancies</a></li>
          <li><a href="/careers/internships" title="Internships" class="active">Internships</a></li>
          <li class="last"><a href="/careers/volunteers" title="Volunteers">Volunteers</a></li>
        </ul>
      </li>
      <li class="last"><a href="/careers/jpo" title="Junior Professional Officers">Junior Professional Officers</a></li>
    </ul>
  </nav>
</div>