(function () {    
    const DisplaySkills = true;    
    const indevmode = location.host === "dmj.one" ? false : true;  // Set to false when deploying to production

    let linkarray = [];
    let certificate_code_downloader = [];

    const textColors = ['text-primary', 'text-success', 'text-danger', 'text-warning', 'text-info', 'text-auto'];
    const glowClasses = {
        'text-primary': 'text-primary-glow-on-hover',
        'text-success': 'text-success-glow-on-hover',
        'text-danger': 'text-danger-glow-on-hover',
        'text-warning': 'text-warning-glow-on-hover',
        'text-info': 'text-info-glow-on-hover',
        'text-auto': 'text-light-glow-on-hover',
    };

    const getRandomTextColor = () => textColors[Math.floor(Math.random() * textColors.length)];
    const getGlowClass = (textColor) => glowClasses[textColor] || '';
    const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
    const generateUrl = (cert, certifications) => cert.certificate_verify_url || generateCertificateUrl(cert, certifications);
    const generateCertificateUrl = (cert, certifications) => {
        if (certifications.platform === 'Coursera') {
            const CourseType = {
                'Specialization': `https://www.coursera.org/verify/specialization/${cert.certificate_code}`,
                'Professional Certificate': `https://www.coursera.org/verify/professional-cert/${cert.certificate_code}`,
                'Course': `https://coursera.org/verify/${cert.certificate_code}`,
            };
            return CourseType[certifications.type] || '#';
        }
        return '#';
    };

    const getCategoryName = (category) => {
        const categoryNames = {
            'coursera-professional-certificate': 'Coursera Professional Certificates',
            'coursera-specialization': 'Coursera Specializations',
            'worldhealthorganization': 'World Health Organization',
            'data-science': 'Data Science',
            'cloud-computing': 'Cloud Computing',
            'cyber-security': 'Cyber Security',
            'networking': 'Networking',
            'databases': 'Databases',
            'agile': 'Agile',
            'soft-skills': 'Soft Skills',
            'other': 'Other',
        };
        return categoryNames[category] || 'Miscellaneous';
    };

    const generateCardImage = (cert, category, certifications) => {
        switch (cert.imgloc) {
            case 'c':
                imgSrc = cert.logo;
                objpos = cert.display_styles.ObjectPosition;
                objfit = cert.display_styles.ObjectFitStyle;
                ratio = cert.display_styles.ratio;
                imgClass = cert.display_styles.class;
                break;
            case 'p':
                imgSrc = certifications.logo;
                objpos = certifications.display_styles.ObjectPosition;
                objfit = certifications.display_styles.ObjectFitStyle;
                ratio = certifications.display_styles.ratio;
                imgClass = certifications.display_styles.class;
                break;
            case 'g-coursera':
                imgSrc = `https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~${cert.certificate_code}/CERTIFICATE_LANDING_PAGE~${cert.certificate_code}.jpeg`;
                awslink = true;
                ratio = 'ratio-1x1';
                objpos = "-208px 0px;";
                objfit = 'cover';
                imgClass = 'p-0 bg-white';
                break;
            default:
                objpos = '';
                objfit = 'cover';
                imgSrc = certifications.platform_logo;
                ratio = 'ratio-16x9';
                imgClass = 'p-0';
                break;
        }

        const objectFitStyle = `object-fit: ${objfit};`;
        const objectPositionStyle = `object-position: ${objpos};`;

        const imgtag = `<div class="ratio ${ratio}"><img src="${imgSrc}" class="card-img-top img-fluid vw-100 ${imgClass}" alt="Certificate of ${cert.name}" style="${objectFitStyle} ${objectPositionStyle}" loading="lazy" title="Click to verify the certificate for ${cert.name} issued by ${certifications.platform}"></div>`
        return imgtag;
    };

    const renderSkills = (skills) => {
        // Fisher-Yates (Knuth) Shuffle for efficient in-place shuffling
        for (let i = skills.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [skills[i], skills[j]] = [skills[j], skills[i]];
        }

        // Use a single join operation for better performance
        return skills.slice(0, 4).map(skill =>
            `<span class="badge fw-normal rounded bg-primary bg-opacity-25 p-1 m-1" style="color: var(--text-color); letter-spacing:0.01rem;">${skill}</span>`
        ).join('');
    };


    const renderCard = (cert, category, certifications) => {
        if (!cert.name) return '';

        const randomTextColor = getRandomTextColor();
        const glowClass = getGlowClass(randomTextColor);
        const formattedDate = formatDate(cert.completed);
        const cardImage = generateCardImage(cert, category, certifications);
        const url = generateUrl(cert, certifications);

        if (indevmode) {
            linkarray.push(`<a href="${url}" target="_blank">${cert.name}</a>`);
            certifications.platform === "Coursera" ? certificate_code_downloader.push(cert.certificate_code) : '';
        }

        return `
                            <div class="col-lg-4 d-flex align-items-stretch justify-content-center py-2">
                                <div class="card shadow-on-hover scale-2 rounded border-0 border-danger border-top border-opacity-50 border-bottom">
                                    <div class="card-header m-0 p-0 justify-content-center align-items-center">
                                        <a href="${url}" target="_blank">
                                            ${cardImage}
                                        </a>
                                    </div>
                                    <div class="card-body justify-content-center align-items-center">
                                        <div class="d-flex flex-column text-center">
                                            <div class="flex-grow-1 my-1">
                                                <a href="${url}" target="_blank"><h3 class="pt-0 scale-2 ${randomTextColor} ${glowClass}" title="Click to verify the certificate for ${cert.name} issued by ${certifications.platform}"><strong>${cert.name}</strong></h3></a>
                                                <div class="py-1 text-center">
                                                    <div class="badge-box">
                                                        <span class="badge bg-warning-subtle bg-gradient bg-opacity-25 shadow p-2 m-1 fw-normal text-auto scale-2 no-shadow-on-hover"
                                                              ${cert.by_url ? `style="cursor: pointer;" onclick="window.open('${cert.by_url}', '_blank');" title="Learn more about ${cert.by}"` : ''}>
                                                            <i class="fas fa-university"></i> &nbsp;${cert.by}
                                                        </span>
                                                        <span class="badge bg-info-subtle bg-gradient bg-opacity-10 shadow p-2 m-1 fw-normal text-auto scale-2 no-shadow-on-hover" 
                                                              ${cert.course_url ? `style="cursor: pointer;" onclick="window.open('${cert.course_url}', '_blank');" title="View this course on ${certifications.platform}"` : ''}>
                                                            <i class="fas fa-chalkboard-teacher"></i> &nbsp;${certifications.platform}
                                                        </span>
                                                        <span class="badge bg-danger-subtle bg-gradient bg-opacity-10 shadow p-2 m-1 fw-normal text-auto scale-2 no-shadow-on-hover" 
                                                              ${certifications.type_help_url ? `style="cursor: pointer;" onclick="window.open('${certifications.type_help_url}', '_blank');" title="What is a ${certifications.type}? Click to find out."` : ''}>
                                                            <i class="fas fa-graduation-cap"></i> &nbsp;${certifications.type}
                                                        </span>                                    
                                                        <span class="badge bg-success-subtle bg-gradient bg-opacity-50 shadow p-2 m-1 fw-normal text-auto scale-2 no-shadow-on-hover cursor-pointer" 
                                                              title="Copy certification details for your resume" 
                                                              onclick="navigator.clipboard.writeText('${cert.name} by <strong>${cert.by}</strong> (via ${certifications.platform}) on ${formattedDate} ${url}').then(() => alert('Certification details copied to clipboard!'));">
                                                            <i class="fas fa-calendar-alt"></i> &nbsp;${formattedDate}
                                                        </span>
                                                    </div>
                                                </div>
                                                ${DisplaySkills && cert.skills.length > 0 ? `
                                                <div class="p-0 mb-1 text-center d-none d-sm-block pt-3">
                                                    <div class=""><i class="fas fa-user-tie"></i> &nbsp;Skills Acquired:
                                                    <div class="badge-box">${renderSkills(cert.skills)}</div></div>
                                                </div>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
    };

    const renderCards = (certifications, category) => {
        const container = document.getElementById('certification');
        const article = document.createElement('article');
        article.className = `autoid container bg-transparent`;
        container.appendChild(article);

        const header = document.createElement('h3');
        const randomTextColor = getRandomTextColor();
        const glowClass = getGlowClass(randomTextColor);
        header.className = `text-center ${randomTextColor} ${glowClass} display-6 my-3`;
        header.id = category;
        // header.textContent = getCategoryName(category);
        header.textContent = certifications.displayname;
        article.appendChild(header);

        const div = document.createElement('div');
        div.className = 'row row-cols-1 row-cols-md-3 g-4';
        div.id = 'certification-cards';
        article.appendChild(div);

        const cards = certifications.certificates.map(cert => renderCard(cert, category, certifications)).join('');
        div.innerHTML += cards;
    };
    
    const debugfn = () => {
        // Check if developermode is true, the host is localhost, and user does not confirm
        if (indevmode) {
            // Run the block only if all conditions are met
            (() => {
                let ol = document.createElement('ol');
                ol.id = 'certslist';
                let certlistitems = linkarray.map((certs) => `<li class="nav-item">${certs}</li>`).join('');
                ol.innerHTML = certlistitems;
                document.body.appendChild(ol);
            })();
            (() => {
                let ol = document.createElement('ol');
                ol.id = 'urldownloader';
                let certlistitems = certificate_code_downloader.map((cert, index) => `<li class="nav-item"><a href="https://www.coursera.org/api/certificate.v1/pdf/${cert}">${cert}</a></li>`).join('');
                ol.innerHTML = certlistitems;
                document.body.appendChild(ol);
            })();
        } else {
            return null; // Return null if any of the conditions fail
        }
    };
 

    fetch('js/certs.json')
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach(category => {
                renderCards(data[category], category);
            });
        })
        .then(() => applyCardStyles())
        .then(() => { indevmode? debugfn() : '' })
        // .then(() => { getdownloadurl() })
        .catch(error => console.error('Error fetching the certifications:', error));
})();