(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const htmlContent = `
       <div class="btn_focus-class position-fixed">
            <button id="contact-button" type="button" class="btn bg-gradient bg-warning bg-opacity-25 button_slide slide_right" data-bs-toggle="modal" data-bs-target="#contactModal"><i class="bi bi-envelope-plus-fill"></i> Message Us</button>
        </div>
        <div class="modal fade" id="contactModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Message Us</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="contact-form" class="mt-1 needs-validation" novalidate>
                            <div class="d-flex justify-content-center mb-3">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="anonymousSwitch">
                                    <label class="form-check-label" for="anonymousSwitch">Send Anonymously</label>
                                </div>
                            </div>
                            <div id="name-field" class="mb-3">
                                <label for="name" class="form-label">Name*</label>
                                <input type="text" class="form-control" id="name" required>
                            </div>
                            <div id="email-field" class="mb-3">
                                <label for="email" class="form-label">Email*</label>
                                <input type="email" class="form-control" id="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="message-type" class="form-label">Message Type*</label>
                                <select class="form-select" id="message-type" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>Course-related Inquiry</option>
                                    <option>Collaboration Request</option>
                                    <option>Volunteering</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message*</label>
                                <textarea class="form-control" id="message" required></textarea>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col d-grid">
                                    <button type="submit" class="btn btn-primary" id="submit-button">Submit</button>
                                </div>
                                <div class="col d-grid">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </form>
                        <div id="success-message" class="alert alert-success mt-4 d-none">
                            Your message was submitted successfully.
                        </div>
                        <div id="error-message" class="alert alert-danger mt-4 d-none">
                            There was an error submitting your message.
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        const container = document.createElement('div');
        container.innerHTML = htmlContent;
        document.body.appendChild(container);

        const ids = ['anonymousSwitch', 'name', 'name-field', 'email', 'email-field', 'message-type', 'message', 'contact-form', 'submit-button', 'success-message', 'error-message', 'contactModal'];
        const [anonymousSwitch, nameField, nameContainer, emailField, emailContainer, messageTypeElement, messageElement, form, submitButton, successMessage, errorMessage, contactModal] = ids.map(id => document.getElementById(id));

        anonymousSwitch.onchange = function () {
            [nameField, emailField].forEach((field, i) => {
                if (anonymousSwitch.checked) field.removeAttribute('required');
                else field.setAttribute('required', '');
                [nameContainer, emailContainer][i].style.display = anonymousSwitch.checked ? 'none' : 'block';
            });
        };

        form.onsubmit = async function (event) {
            event.preventDefault();
            form.classList.add('was-validated');

            if (!form.checkValidity()) return;

            submitButton.disabled = true;
            const name = anonymousSwitch.checked ? '' : nameField.value;
            const email = anonymousSwitch.checked ? '' : emailField.value;
            const message = messageElement.value;
            const messageType = messageTypeElement.value;

            try {
                const response = await fetch('https://submit.dmj.one', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ name, email, message, messageType })
                });

                successMessage.classList.toggle('d-none', !response.ok);
                errorMessage.classList.toggle('d-none', response.ok);

                if (response.ok) {
                    setTimeout(() => bootstrap.Modal.getInstance(contactModal).hide(), 2000);
                    setTimeout(() => {
                        successMessage.classList.add('d-none');
                        form.reset();
                    }, 3000);
                } else {
                    setTimeout(() => errorMessage.classList.add('d-none'), 2000);
                }
            } catch (error) {
                errorMessage.classList.remove('d-none');
                setTimeout(() => errorMessage.classList.add('d-none'), 2000);
            }

            submitButton.disabled = false;
        };
    });
})();