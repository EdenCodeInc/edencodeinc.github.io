---
layout: page
title: Home
permalink: /
feature-img: "assets/img/figures/home.png"
order: 1
slogan: "Deliver AI Solutions for Quantum Computing."
---

<link rel="stylesheet" href="{{ 'assets/css/blog-cards.css' | relative_url }}">

<style>
.feature-img-container {
    position: relative;
}

.slogan-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    z-index: 1;
}

.slogan-text {
    font-size: 2.5em;
    font-weight: 300;
    color: #553128;
    padding: 20px 40px;
    display: inline-block;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Find the feature image container
    const featureImgContainer = document.querySelector('.feature-img-container');
    if (featureImgContainer) {
        // Create and append the slogan container
        const sloganContainer = document.createElement('div');
        sloganContainer.className = 'slogan-container';
        sloganContainer.innerHTML = '<div class="slogan-text">{{ page.slogan }}</div>';
        featureImgContainer.appendChild(sloganContainer);
    }
});
</script>

<div class="blog-posts-container">
    <h2>Latest Articles</h2>
    <p>Explore our latest insights and research in AI and quantum computing.</p>
    
    <div class="blog-grid">
        {% for post in site.posts %}
        <div class="blog-card">
            {% if post.thumbnail %}
            <div class="blog-thumbnail">
                <a href="{{ post.url | relative_url }}">
                    <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}">
                </a>
            </div>
            {% endif %}
            <div class="blog-content">
                <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
                {% if post.tags %}
                <div class="post-tags">
                    {% for tag in post.tags %}
                    <span class="tag">{{ tag }}</span>
                    {% endfor %}
                </div>
                {% endif %}
                <div class="post-excerpt">
                    {{ post.excerpt | strip_html | truncatewords: 30 }}
                </div>
                <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
            </div>
        </div>
        {% endfor %}
    </div>
</div> 