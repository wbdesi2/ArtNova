// JavaScript Document// =========================
// OTP BUTTON ENABLE/DISABLE
// =========================

document.addEventListener(
"DOMContentLoaded",
() =>
{
    const input =
    document.querySelector(
        ".change .code"
    );

    const button =
    document.getElementById(
        "continueBtn"
    );

    function checkCode()
    {
        const code =
        input.value.trim();

        if(code.length === 4)
        {
            button.disabled = false;
        }
        else
        {
            button.disabled = true;
        }
    }

    input.addEventListener(
        "input",
        function()
        {
            this.value =
            this.value.replace(
                /[^0-9]/g,
                ""
            );

            checkCode();
        }
    );

    checkCode();
});