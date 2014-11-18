---
layout: page
title: Branding Toolkit
permalink: /components/branding-toolkit/
resource: true
categories: Components
---

Making sure your page branding adheres to WFP Online Branding Guidelines, we have prepared a small branding toolkit, which you should use on your pages.

### Favicons
Favicons are small icons that are being often displayed in the browser address bar, stored with bookmarked pages, etc. You should only use the officialy approved favicons.

Add the following lines to the `<head>` section of your page:

{% highlight html %}
<link rel="apple-touch-icon-precomposed" sizes="http://cdn.wfp.org/apple-touch-icon-152x152-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="http://cdn.wfp.org/apple-touch-icon-144x144-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="http://cdn.wfp.org/apple-touch-icon-120x120-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="http://cdn.wfp.org/apple-touch-icon-114x114-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="http://cdn.wfp.org/apple-touch-icon-76x76-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="http://cdn.wfp.org/apple-touch-icon-72x72-precomposed.png" />
<link rel="apple-touch-icon-precomposed" href="http://cdn.wfp.org/apple-touch-icon-precomposed.png" />
<link rel="shortcut icon" href="http://cdn.wfp.org/favicon.ico" />
{% endhighlight %}

If your application/website is not able to connect to the Internet, you can use our [favicon offline kit]({{site.baseurl}}/assets/favicon.zip) to host favicons locally. Download the ZIP file, unpack it and place its contents in the root of your site.

### CSS Toolkit
To make sure your designs follow our guidelines with ease, we've created a dedicated [CSS Toolkit]({{site.baseurl}}/assets/css-lib-0.1.0.zip), which you can download and include in your web pages and applications.