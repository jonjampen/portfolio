<script>
    // form validation
    let nameCheck = false,
        emailCheck = false,
        messageCheck = false,
        nameDisplay = "none",
        emailDisplay = "none",
        messageDisplay = "none",
        buttonState = true,
        buttonTitle = "Please fill out all fields";

    function validateName(e) {
        nameDisplay = "block";
        nameCheck = e.target.value ? true : false;
    }

    function validateMail(e) {
        emailDisplay = "block";
        var atPos = e.target.value.indexOf("@");
        var dotPos = e.target.value.lastIndexOf(".");
        emailCheck =
            atPos > 0 && dotPos > atPos + 1 && dotPos < e.target.value.length - 1 ? true : false;
    }

    function validateMessage(e) {
        messageDisplay = "block";
        messageCheck = e.target.value ? true : false;
    }

    $: if (nameCheck && emailCheck && messageCheck) {
        buttonTitle = "Send message";
        buttonState = false;
    } else {
        buttonTitle = "Please fill out all fields";
        buttonState = true;
    }

    let name = "";
    let email = "";
    let message = "";

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);

        await fetch("../lib/sendEmail.php", {
            method: "POST",
            body: formData,
        });

        // Show success message
    };
</script>

<section class="contactForm" id="contact">
    <h2>Contact</h2>
    <p class="title-info">Get in touch with me 👋</p>
    <form on:submit|preventDefault={handleSubmit}>
        <div class="inputLabel">
            <label for="nameInput">Name</label>
            <div class="validation">
                <input type="text" name="name" id="nameInput" on:keyup={validateName} required />
                <img
                    src="/google-icons/{nameCheck ? 'check' : 'close'}.svg"
                    class="{nameCheck ? '' : 'red'} center"
                    style="display: {nameDisplay}"
                />
            </div>
        </div>
        <div class="inputLabel">
            <label for="emailInput">Email</label>
            <div class="validation">
                <input type="text" name="email" id="emailInput" on:keyup={validateMail} required />
                <img
                    src="/google-icons/{emailCheck ? 'check' : 'close'}.svg"
                    class="{emailCheck ? '' : 'red'} center"
                    style="display: {emailDisplay}"
                />
            </div>
        </div>

        <div class="inputLabel">
            <label for="messageInput">Message</label>
            <div class="validation">
                <textarea name="message" id="messageInput" on:keyup={validateMessage} required />
                <img
                    src="/google-icons/{messageCheck ? 'check' : 'close'}.svg"
                    class="{messageCheck ? '' : 'red'} bottom"
                    style="display: {messageDisplay}"
                />
            </div>
        </div>
        <button class="btn primary" type="submit" disabled={buttonState} title={buttonTitle}
            >Send</button
        >
    </form>
</section>
