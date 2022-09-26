import deepracer from "../img/deepracer.png";
import flower from "../img/flower.jpeg";
import dog from "../img/dog.jpeg";
import bank from "../img/bankOfJava.png";
import tossup from "../img/tossup.png";
import drop from "../img/drop.png";

const projects = [
    {
        id: 1,
        title: "AWS DeepRacer Student League - Top 10 Placement in Canada",
        link: "https://linkmix.co/11742933",
        src: deepracer,
        alt: "AWS DeepRacer Student League",
        desc: "I built an AWS DeepRacer model using Python and Reinforcement Learning that allows the DeeRacer" +
            " car to go around a track autonomously. My model's lap time on the virtual March 2022 Global" +
            " Student league track qualified me as one of the top Canadian Student racers in Canada. I was" +
            " invited to compete in the Ottawa 2022 Canadian Student Wilcard Race on a live track, where I" +
            " placed 9th."
    },
    {
        id: 2,
        title: "Final Project of AWS AI/ML Scholarship Course - Flower Classifier",
        link: "https://github.com/pdychinco/flowerclassifier",
        src: flower,
        alt: "Flower",
        desc: "I coded Python script to read pictures and classify various species of flowers. After I created" +
            " my own classifier and added it to a pretrained model. I had to modify the hyperparameters which" +
            " resulted in a validation accuracy of 78%. Finally I created a command line tool to train and" +
            " predict flowers using my classifier."
    },
    {
        id: 3,
        title: "First Project of AWS AI/ML Scholarship Course - Dog Classifier",
        link: "https://github.com/pdychinco/dogclassifier",
        src: dog,
        alt: "Golden Retriever",
        desc: "I added code to prewritten code to be able to create the functionality of the Dog Classifier. At" +
            " this stage, I did not write the model and classifier, so the project was focused on getting" +
            " familiar with Python and the various ways of manipulating data."
    },
    {
        id: 4,
        title: "Personal Java Project - Bank of Java",
        link: "https://github.com/pdychinco/bankOfJava",
        src: bank,
        alt: "Bank of Java",
        desc: "I applied Object Oriented Programming (OOP) theology to create a text-based interactive ATM. With" +
            " OOP, I created various classes to hold the logic of different abilities. All the classes come together" +
            " to the ATM class that holds decision logic and calls the various abilities for each class."
    },

    {
        id: 6,
        title: "COMP 1800 Student Project - TossUp App",
        link: "https://comp1800-bby08-a726f.web.app",
        src: tossup,
        alt: "TossUp Web App",
        desc: "Web application to help users decide which restaurant to eat at based on user's survey results. I" +
            " focused primarily on Javascript & backend development to create core features for the app, such as" +
            " the restaurant survey and restaurant roulette. Created with two other BCIT CST 1st term students" +
            " for COMP 1800."
    },
    {
        id: 5,
        title: "COMP 2800 Student Project - Drop App",
        link: "https://agile-earth-44618.herokuapp.com",
        src: drop,
        alt: "Drop Web App",
        desc: "Drop is a donation app to help people who donate to charities that help Ukraine to visually see" +
            " where their money is going by allowing them to pick & choose items that will be sent to them. I" +
            " focused primarily on Javascript for frontend & backend development. The main features I created" +
            " was the shopping cart & registering new users. Created by BCIT CST students in 5 week term for" +
            " COMP 2800."
    },
];

export default projects;