// =========================
// TEMPORIZADOR OTP
// =========================

let count = 30;
let interval;

const timer =
document.getElementById("countdown");

function startTimer()
{
    if(!timer) return;

    clearInterval(interval);

    count = 30;

    timer.textContent = count;

    interval = setInterval(() =>
    {
        count--;

        timer.textContent = count;

        if(count <= 0)
        {
            clearInterval(interval);

            timer.textContent = "0";
        }

    },1000);
}

function restartTimer(event)
{
    event.preventDefault();

    startTimer();

    console.log(
        "Código reenviado"
    );
}

// =========================
// OTP AUTO AVANZAR
// =========================

function setupOTP()
{
    const codes =
    document.querySelectorAll(".code");

    codes.forEach((input,index)=>
    {
        input.addEventListener(
            "input",
            function()
            {
                this.value =
                this.value.replace(
                    /[^0-9]/g,
                    ""
                );

                if(
                    this.value.length === 1 &&
                    index < codes.length - 1
                )
                {
                    codes[
                        index + 1
                    ].focus();
                }
            }
        );

        input.addEventListener(
            "keydown",
            function(e)
            {
                if(
                    e.key === "Backspace" &&
                    this.value === "" &&
                    index > 0
                )
                {
                    codes[
                        index - 1
                    ].focus();
                }
            }
        );
    });
}

// =========================
// VALIDAR OTP
// =========================

function getOTP()
{
    let otp = "";

    document
    .querySelectorAll(".code")
    .forEach(input =>
    {
        otp += input.value;
    });

    return otp;
}

// =========================
// BOTON CONTINUAR
// =========================

function validateOTP()
{
    const otp =
    getOTP();

    if(otp.length < 4)
    {
        alert(
            "Ingrese el código completo."
        );

        return;
    }

    window.location.href =
    "nueva-password.html";
}

// =========================
// PULL TO REFRESH
// =========================

const pullToRefresh =
document.querySelector(
".pull-to-refresh"
);

let touchstartY = 0;

document.addEventListener(
"touchstart",
e =>
{
    touchstartY =
    e.touches[0].clientY;
});

document.addEventListener(
"touchmove",
e =>
{
    if(!pullToRefresh)
        return;

    const touchY =
    e.touches[0].clientY;

    const touchDiff =
    touchY -
    touchstartY;

    if(
        touchDiff > 0 &&
        window.scrollY === 0
    )
    {
        pullToRefresh.classList.add(
            "seen"
        );

        e.preventDefault();
    }
},
{
    passive:false
});

document.addEventListener(
"touchend",
() =>
{
    if(
        pullToRefresh &&
        pullToRefresh.classList.contains(
            "seen"
        )
    )
    {
        pullToRefresh.classList.remove(
            "seen"
        );

        location.reload();
    }
});

// =========================
// INICIALIZAR
// =========================

document.addEventListener(
"DOMContentLoaded",
() =>
{
    startTimer();

    setupOTP();
});