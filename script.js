let courses = [
    {
        name: "JavaScript для початківців",
        platform: "Udemy",
        duration: 20,
        isCompleted: true,
        certificate: true,

        courseInfo: function () {
            return `${this.name} | ${this.platform} | ${this.duration} год. | Завершено: ${this.isCompleted ? "так" : "ні"} | Сертифікат: ${this.certificate ? "так" : "ні"}`;
        },

        markAsCompleted: function () {
            this.isCompleted = true;
            this.certificate = true;
        }
    },

    {
        name: "Основи Python",
        platform: "Coursera",
        duration: 30,
        isCompleted: false,
        certificate: false,

        courseInfo: function () {
            return `${this.name} | ${this.platform} | ${this.duration} год. | Завершено: ${this.isCompleted ? "так" : "ні"} | Сертифікат: ${this.certificate ? "так" : "ні"}`;
        },

        markAsCompleted: function () {
            this.isCompleted = true;
            this.certificate = true;
        }
    },

    {
        name: "HTML та CSS",
        platform: "Prometheus",
        duration: 15,
        isCompleted: true,
        certificate: true,

        courseInfo: function () {
            return `${this.name} | ${this.platform} | ${this.duration} год. | Завершено: ${this.isCompleted ? "так" : "ні"} | Сертифікат: ${this.certificate ? "так" : "ні"}`;
        },

        markAsCompleted: function () {
            this.isCompleted = true;
            this.certificate = true;
        }
    }
];

function displayCourses() {
    const container = document.getElementById("courses");

    container.innerHTML = "";

    courses.forEach(function (course, index) {
        const element = document.createElement("div");

        element.className = "course";

        element.innerHTML = `
            <h3>${course.name}</h3>
            <p><strong>Платформа:</strong> ${course.platform}</p>
            <p><strong>Тривалість:</strong> ${course.duration} год.</p>
            <p><strong>Завершено:</strong> ${course.isCompleted ? "Так" : "Ні"}</p>
            <p><strong>Сертифікат:</strong> ${course.certificate ? "Так" : "Ні"}</p>
            <button onclick="completeCourse(${index})">
                Завершити курс
            </button>
        `;

        container.appendChild(element);
    });

    console.log("Список курсів:");

    courses.forEach(function (course) {
        console.log(course.courseInfo());
    });
}

function addCourse() {
    const name = prompt("Введіть назву курсу:");

    if (!name) {
        return;
    }

    const platform = prompt("Введіть платформу:");

    if (!platform) {
        return;
    }

    const duration = Number(prompt("Введіть тривалість курсу в годинах:"));

    if (isNaN(duration) || duration <= 0) {
        alert("Тривалість повинна бути додатним числом.");
        return;
    }

    const completedAnswer = prompt(
        "Чи завершено курс? Введіть: так або ні"
    );

    const isCompleted = completedAnswer.toLowerCase() === "так";

    const certificateAnswer = prompt(
        "Чи є сертифікат? Введіть: так або ні"
    );

    const certificate = certificateAnswer.toLowerCase() === "так";

    const newCourse = {
        name: name,
        platform: platform,
        duration: duration,
        isCompleted: isCompleted,
        certificate: certificate,

        courseInfo: function () {
            return `${this.name} | ${this.platform} | ${this.duration} год. | Завершено: ${this.isCompleted ? "так" : "ні"} | Сертифікат: ${this.certificate ? "так" : "ні"}`;
        },

        markAsCompleted: function () {
            this.isCompleted = true;
            this.certificate = true;
        }
    };

    courses.push(newCourse);

    displayCourses();
}

function sortCourses() {
    courses.sort(function (a, b) {
        return a.duration - b.duration;
    });

    displayCourses();

    document.getElementById("result").innerHTML =
        "<p>Курси відсортовано за тривалістю.</p>";

    console.log("Курси за тривалістю:");

    courses.forEach(function (course) {
        console.log(course.courseInfo());
    });
}

function showUncompleted() {
    const uncompletedCourses = courses.filter(function (course) {
        return course.isCompleted === false;
    });

    const result = document.getElementById("result");

    result.innerHTML = "<h3>Незавершені курси:</h3>";

    if (uncompletedCourses.length === 0) {
        result.innerHTML += "<p>Усі курси завершено.</p>";
        return;
    }

    uncompletedCourses.forEach(function (course) {
        result.innerHTML += `
            <p>${course.name} — ${course.platform}</p>
        `;
    });

    console.log("Незавершені курси:");
    console.log(uncompletedCourses);
}

function findCourse() {
    const platform = prompt(
        "Введіть платформу для пошуку курсу:"
    );

    const course = courses.find(function (course) {
        return course.platform.toLowerCase() === platform.toLowerCase();
    });

    const result = document.getElementById("result");

    if (course) {
        result.innerHTML = `
            <h3>Знайдений курс:</h3>
            <p>${course.courseInfo()}</p>
        `;

        console.log("Знайдений курс:");
        console.log(course);
    } else {
        result.innerHTML = "<p>Курс на цій платформі не знайдено.</p>";
    }
}

function completeCourse(index) {
    courses[index].markAsCompleted();

    displayCourses();

    document.getElementById("result").innerHTML =
        `<p>Курс "${courses[index].name}" завершено. Сертифікат отримано.</p>`;
}

function calculateAverageDuration() {
    let total = 0;

    courses.forEach(function (course) {
        total += course.duration;
    });

    return total / courses.length;
}

function showAverageDuration() {
    const average = calculateAverageDuration();

    document.getElementById("result").innerHTML =
        `<p>Середня тривалість курсів: <strong>${average.toFixed(2)} год.</strong></p>`;

    console.log("Середня тривалість:", average);
}

displayCourses();