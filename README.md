# Post Pilot


![Screenshot 2023-11-20 011227](https://github.com/DeadmanAbir/PostPilot/assets/102755654/493f54b6-b3c8-48c2-b3a3-297f810bb3c8)




**Post Pilot** is a AI powered Ghostwriting platform that combines three main tools: Web Scrapping,  AI Powered content generation and Auto posting bot. It allows users to chose from a wide variety of news type content and generate latest and engaging piece of content that will be automatically posted on the platform of their choice at the interval/frequency set up by the user .

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Backend](#backend)
- [Demo](#demo)
- [Scraper](#scraper)
- [Socials](#socials)



**Website Link**- https://post-pilot-blush.vercel.app/

## Introduction

**PostPilot** is an AI ghostwriter which posts everyday on Linkedln on your behalf.Choose any news niece and enjoy daily automated high quality posting.

## Features

- **Web Scrapping** The PuppeteerJS bot extracts information from the news websites and store it in database. This operation is done everyday at a specific time.

- **AI Powered Post generator:** In our application, we've seamlessly integrated GPT 3.5 turbo to generate captivating and thought-provoking posts for you. The GPT api takes news from DB that the scraper has scraped and generates high quality posts.

- **Automated Posts:** After you successfully create a project, PostPilot will automatically post every day to your LinkedIn, and the content will be unique every day.



## Getting Started

### Prerequisites

- Node.js and npm
- Next.js
- Express
- Tailwind

### Installation

1. Clone the repository: `https://github.com/DeadmanAbir/PostPilot.git`
2. Enter the code in project terminal: `cd PostPilot`
3. Now enter the command `npm install`
   
4. Configure environment variables: Create a .env file in the root of project, and set up the required environment variables such as database connection details, API keys, and other configurations.
5. Start the development environment: 
  - Now enter command: `npm run dev`

### Backend

Here the repo for PostPilot's Backend- https://github.com/DeadmanAbir/PP-Backend


## Usage

### Linkedin Auto Posting AI Bot

- Visit the **Dashboard** page to automate your Linkedln account by authorizing the app and selecting the news type that you want to post in your account.
- Select form a wide variety of category for your content based on your preferences.
- Click on `start automation` button to spin up a magical post for you that will be posted to your account.
- After a succesfull project creation and post, a email will be sent from PostPilot

### PuppeteerJS for web scraping
- The puppeteerJS bot scrapes latest news from news websites and store it into DB. 
- This stored news is then shared with ChatGPT to produce high quality, thought proving
- and engaging piece of content that you can share on your socials. 

### OpenAI's ChatGPT Integration

- We have integrated GPT 3.5 turbo in our app to make thought provoking, exciting and engaging post for you .
- The GPT API automatically detects the news type selected by you and takes in input from the puppeteerJS scrapper to give you that latest and hot piece of engaging content.

### Email functionality using NodeMailer

- We have used `Nodemailer` for email notification. After every succesfull post via PostPilot, a email will be sent to user's gmail.

## Demo

Here is a high level demo which shows how to use the app-

**Video Link** - https://www.youtube.com/watch?v=XU2uxFrCKj4&t=1s


## Scraper

- PostPilot has an scraper, which is built on Puppeteer.js, which runs daily to scrape and gather news.
- Ths gthered news is stored in DB, which is later used for post creation.
- Scraper Repo - https://github.com/DeadmanAbir/PP-Scraper


## Socials
- Linkedln- https://www.linkedin.com/in/abir-dutta-408759223/
- Twitter- https://twitter.com/ItsDutta99

