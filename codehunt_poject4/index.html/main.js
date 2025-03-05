// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
}

// Chatbot Integration
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatbot = document.getElementById('closeChatbot');

chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('active');
});

closeChatbot.addEventListener('click', () => {
    chatbotWindow.classList.remove('active');
});

// Initialize Chatbase
(function(){
    if(!window.chatbase||window.chatbase("getState")!=="initialized"){
        window.chatbase=(...arguments)=>{
            if(!window.chatbase.q){window.chatbase.q=[]}
            window.chatbase.q.push(arguments)
        };
        window.chatbase=new Proxy(window.chatbase,{
            get(target,prop){
                if(prop==="q"){return target.q}
                return(...args)=>target(prop,...args)
            }
        })
    }
    const onLoad=function(){
        const script=document.createElement("script");
        script.src="https://www.chatbase.co/embed.min.js";
        script.id="iAvJ0xMsHDuAgM50bciOq";
        script.domain="www.chatbase.co";
        document.body.appendChild(script)
    };
    if(document.readyState==="complete"){
        onLoad()
    }else{
        window.addEventListener("load",onLoad)
    }
})();

// Dummy Transactions Data
const transactions = [
    { id: 1, type: 'expense', amount: -500, category: 'Food', date: '2024-02-15' },
    { id: 2, type: 'income', amount: 5000, category: 'Salary', date: '2024-02-14' },
    { id: 3, type: 'expense', amount: -1200, category: 'Rent', date: '2024-02-13' },
];

// Populate Transactions
const transactionsList = document.getElementById('transactionsList');

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}

function renderTransactions() {
    transactionsList.innerHTML = transactions.map(transaction => `
        <div class="transaction-item ${transaction.type}">
            <div class="transaction-info">
                <span class="category">${transaction.category}</span>
                <span class="date">${transaction.date}</span>
            </div>
            <span class="amount">${formatCurrency(transaction.amount)}</span>
        </div>
    `).join('');
}

renderTransactions();