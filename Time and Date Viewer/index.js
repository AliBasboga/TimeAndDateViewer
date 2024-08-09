function update() {
    const clockelement = document.getElementById("clock");
    const now = new Date;

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const Day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();

    const timeString =`${hours}.${minutes}.${seconds}`;
    const dateString =`${Day}.${month}.${year}`;

    clockelement.textContent =`Tarih: ${dateString} - Saat: ${timeString}`;
}

setInterval(update, 1000);

update();

