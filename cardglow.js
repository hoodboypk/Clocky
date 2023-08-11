// for glow

document.getElementById("cards").onmousemove = e => {
    for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
}

// for time


// india date and time
setInterval(() => {
    const d = new Date();
    const localTime = d.getTime();

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const indTimeNow = new Date();
    const formattedTime = indTimeNow.toLocaleString('hi-IN', timeOptions);
    const formattedDate = indTimeNow.toLocaleString('hi-IN', dateOptions);
    document.getElementById('ind-time').innerHTML = formattedTime;
    document.getElementById('ind-date').innerHTML = formattedDate
}, 1000);

// usa date and time
setInterval(() => {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const offset = -5; // UTC offset for USA Eastern Time Zone is -05:00
    const usa = utc + (3600000 * offset);

    const usaTimeNow = new Date(usa);

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const formattedTime = usaTimeNow.toLocaleString('en-US', timeOptions);
    const formattedDate = usaTimeNow.toLocaleString('en-US', dateOptions);

    document.getElementById("usa-time").innerHTML = formattedTime;
    document.getElementById("usa-date").innerHTML = formattedDate;
}, 1000);

// germany date and time 
setInterval(() => {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const offset = 2; // UTC offset for USA Eastern Time Zone is -05:00
    const ger = utc + (3600000 * offset);

    const gerTimeNow = new Date(ger);

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const formattedTime = gerTimeNow.toLocaleString('de-DE', timeOptions);
    const formattedDate = gerTimeNow.toLocaleString('de-DE', dateOptions);

    document.getElementById("ger-time").innerHTML = formattedTime;
    document.getElementById("ger-date").innerHTML = formattedDate;
}, 1000);

// japan date and time
setInterval(() => {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const offset = 9; // UTC offset for USA Eastern Time Zone is -05:00
    const jap = utc + (3600000 * offset);

    const japTimeNow = new Date(jap);

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const formattedTime = japTimeNow.toLocaleString('en-JP', timeOptions);
    const formattedDate = japTimeNow.toLocaleString('en-JP', dateOptions);

    document.getElementById("jap-time").innerHTML = formattedTime;
    document.getElementById("jap-date").innerHTML = formattedDate;
}, 1000);

// england date and time
setInterval(() => {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const offset = 1; // UTC offset for USA Eastern Time Zone is -05:00
    const eng = utc + (3600000 * offset);

    const engTimeNow = new Date(eng);

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const formattedTime = engTimeNow.toLocaleString('en-GB', timeOptions);
    const formattedDate = engTimeNow.toLocaleString('en-GB', dateOptions);

    document.getElementById("eng-time").innerHTML = formattedTime;
    document.getElementById("eng-date").innerHTML = formattedDate;
}, 1000);

// singaoire date and time
setInterval(() => {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const offset = 8; // UTC offset for USA Eastern Time Zone is -05:00
    const sin = utc + (3600000 * offset);

    const sinTimeNow = new Date(sin);

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const formattedTime = sinTimeNow.toLocaleString('en-SG', timeOptions);
    const formattedDate = sinTimeNow.toLocaleString('en-SG', dateOptions);

    document.getElementById("sin-time").innerHTML = formattedTime;
    document.getElementById("sin-date").innerHTML = formattedDate;
}, 1000);