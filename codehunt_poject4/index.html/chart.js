// Monthly Overview Chart
const overviewCtx = document.getElementById('overviewChart').getContext('2d');
const overviewChart = new Chart(overviewCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Income',
            data: [65000, 59000, 80000, 81000, 56000, 55000, 40000, 65000, 59000, 80000, 81000, 56000],
            backgroundColor: '#0066ff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: value => '₹' + value
                }
            }
        }
    }
});

// Expense Breakdown Chart
const expenseCtx = document.getElementById('expenseChart').getContext('2d');
const expenseChart = new Chart(expenseCtx, {
    type: 'doughnut',
    data: {
        labels: ['Rent', 'Food', 'Transport', 'Utilities', 'Entertainment'],
        datasets: [{
            data: [25000, 12000, 5000, 5000, 7000],
            backgroundColor: [
                '#0066ff',
                '#00cc66',
                '#ff9933',
                '#ff3366',
                '#9933ff'
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});