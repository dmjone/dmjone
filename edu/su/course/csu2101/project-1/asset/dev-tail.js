// Fetches all articles content just like the index page.
(async function loadProfile() {
    try {
        const response = await fetch('../api/profile', { credentials: 'include', cache: 'no-store' });
        const navLinks = document.getElementById('dynamicButton');
        if (!response.ok) throw new Error('Not logged in');
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        if (data.role) {
            navLinks.innerHTML = `<button id="logout" class="btn btn-warning btn-custom">Logout</button>`;
            document.getElementById('logout').addEventListener('click', () => {
                fetch('../api/logout', { method: 'POST', cache: 'no-store' })
                    .then(r => r.json())
                    .then(() => window.location.href = '../../project-1/');
            });
        }
    } catch (err) {
        console.log("Not logged in:", err);
    }
})();

// Extract the slug from the URL path
const urlSegments = window.location.pathname.split('/');
const articleSlug = urlSegments[urlSegments.length - 1]; // Get the last part of the path as the slug
let articleID;

// Load the article content and related info
function loadArticle() {
    fetch('../api/articlesCached', { cache: 'default' })
        .then(response => response.json())
        .then(data => {
            let article = data.find(a => a.slug === articleSlug);
            if (article) {
                articleID = article.id;

                // Update the page title using the article title if available; otherwise, fallback to the slug.
                document.title = `${article.title || articleSlug} - ThryVexis`;

                document.getElementById('bannerTitle').textContent = article.title;
                document.getElementById('bannerDate').textContent = "Published on " + article.created_at + " by " + article.author.name;
                document.getElementById('articleContent').innerHTML = marked.parse(article.content);

                if (article.author) {
                    document.getElementById('authorBio').innerHTML = `
                                    <div class="card border border-1 border-danger mb-4">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center">
                                                <img src="${article.author.avatar || 'https://dmj.one/logo.png'}" 
                                                     class="rounded-circle me-3" alt="${article.author.name}" width="60" height="60">
                                                <div>
                                                    <h5 class="mb-0" id="author-name">
                                                        <a href="${article.author.url}" class="text-decoration-none">${article.author.name}</a>
                                                    </h5>
                                                    <small class="text-muted">Author</small>
                                                </div>
                                            </div>
                                            <p class="mt-3 mb-0">${article.author.bio || "No bio available."}</p>
                                        </div>
                                    </div>
                                `;
                } else {
                    document.getElementById('authorBio').textContent = "Author information not available.";
                }

                loadRelatedArticles(data, article);
            } else {
                document.title = '404 - Not Found - ThryVexis';

                const elements = {
                    bannerTitle: document.getElementById('bannerTitle'),
                    bannerDate: document.getElementById('bannerDate'),
                    mainContent: document.querySelector('.main-content'),
                    footer: document.querySelector('footer')
                };

                if (elements.bannerTitle) {
                    elements.bannerTitle.textContent = '404: Article not found';
                    elements.bannerTitle.classList.add('text-capitalize');
                }

                if (elements.bannerDate) {
                    elements.bannerDate.innerHTML = '<a href="../../" class="btn btn-danger btn-large text-capitalize">Go Back</a>';
                }

                elements.mainContent?.style.setProperty('display', 'none');

                elements.footer?.classList.remove('mt-5');
            }
            loadComments();
        })
        .catch(error => {
            console.error('Error loading article:', error);
        });
}

// Load related articles (up to 3) using Fisher-Yates shuffle
function loadRelatedArticles(articles, currentArticle) {
    let related = articles.filter(a => a.id !== currentArticle.id && a.category === currentArticle.category);
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffleArray(related);

    try {
        document.getElementById('nextArticle').addEventListener('click', () => {
            const nextArticle = related.pop();
            try {
                if (nextArticle) window.location.href = nextArticle.slug;
            } catch (err) {
                console.error('Error loading next article:', err);
            }
        });
    } catch (err) { console.log('Error setting next article button:', err); };

    const selected = related.slice(0, 3);
    const container = document.getElementById('relatedArticles');
    container.innerHTML = '';
    if (selected.length === 0) {
        container.innerHTML = '<p>No related articles.</p>';
    } else {
        selected.forEach(article => {
            const card = document.createElement('div');
            card.className = 'card mb-2';
            card.innerHTML = `
                            <div class="card-body">
                                <h6 class="card-title">${article.title}</h6>
                                <p class="card-text"><small class="text-muted">Published on ${article.created_at}</small></p>
                                <a href="${article.slug}" class="stretched-link"></a>
                            </div>
                        `;
            container.appendChild(card);
        });
    }
}

// Load comments for the article
function loadComments() {
    fetch('../api/articles/' + articleID + '/comments', { cache: 'no-store' })
        .then(response => response.json())
        .then(comments => {
            const commentsSection = document.getElementById('commentsSection');
            commentsSection.innerHTML = '';
            if (comments.length === 0) {
                commentsSection.innerHTML = '<p>No comments yet.</p>';
            } else {
                comments.forEach(comment => {
                    commentsSection.innerHTML += `
                        <div class="comment">
                            <p>${marked.parse(comment.content)}</p>
                            <small>Posted on ${comment.created_at}</small>
                        </div>
                    `;
                });
            }
        })
        .catch(error => {
            console.error('Error fetching comments:', error);
        });
}

document.getElementById('submitComment').addEventListener('click', () => {
    const commentContent = document.getElementById('commentText').value;
    if (!commentContent.trim()) {
        alert("Please enter a comment before submitting.");
        return;
    }
    fetch('../api/articles/' + articleID + '/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: commentContent })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('commentText').value = '';
                loadComments();
            } else {
                alert(data.error);
            }
        })
        .catch(error => {
            console.error('Error submitting comment:', error);
        });
});

// Social share buttons setup
function setupShareButtons() {
    const currentUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent("Check out ThryVexis Blog!");
    document.getElementById('shareX').href = `https://x.com/intent/tweet?url=${currentUrl}&text=${shareText}`;
    document.getElementById('shareFacebook').href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    document.getElementById('shareLinkedIn').href = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${shareText}`;
    document.getElementById('shareInstagram').href = `https://www.instagram.com/dmj.one`;
}

setupShareButtons();
loadArticle();