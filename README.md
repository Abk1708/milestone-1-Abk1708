![Web Page Logo](./assets/Nav-Banner.png "Web Page Logo")

# Azizah Songket

This is a company-profile webpage for Azizah Songket. Azizah Sonket is a family business that is engaged in the manufacturing (production) of Sonket using traditional weaving using dyes that utilize dyes from nature that are environmentally friendly so as to reduce the impact of pollution. This web page utilized a basic HTML, CSS, and a slight of JavaScript. This web page also implemented a responsive CSS to suit every screen size.

![Front Page Display](./assets/Capture-01.PNG "Front Page Display")

> ## Table of Contents
>
> -   [Getting Started](#getting-started)
>
> -   [Setup](#setup)
>
> -   [Documented Development Stages](#development)
>
>     -   [HTML](#html)
>     -   [CSS](#css)
>     -   [JavaScript](#javascript)
>
> -   [Deployment Process](#deployment)

<a id="getting-started"></a>

## Getting Started

Before previewing the web page, you need to install the required files to make the page run as intended:

1. [Belleza Font](https://fonts.google.com/specimen/Belleza)

    ![Belleza Font](./assets/Capture-02.PNG "Belleza Font")

2. [Caudex Font](https://fonts.google.com/specimen/Caudex)

    ![Caudex Font](./assets/Capture-03.PNG "Caudex Font")

This fonts can be acquired from Google Fonts or by simply cloning this repository.

There are many extension for VS Code that can help you preview this web page. These are the recommended extension that you can install:

1. Live Server

    This extension can be used to preview a webpage by loading the html files and assigning it to a custom port. Live Server also live reload feature that automatically update the page layout by restarting the page every time there is an update on the source repository.

    ![Screenshot_01](./assets/SS32.PNG "Screenshot_01")

2. Live Preview

    Unlike Live Server, Live Preview runs the html script and displays the preview from VS Code itself. Also, every small change on the html files will be automatically implemented inside the preview.

    ![Screenshot_02](./assets/SS33.PNG "Screenshot_02")

<a id="setup"></a>

## Setup

To set the repo into a development environment, the required steps are:

1. Clone the repo

    ```shell
    git clone https://github.com/Abk1708/milestone-1-Abk1708.git
    ```

2. Navigate into the project directory by using git bash

    ```shell
    cd milestone-1-Abk1708
    ```

3. Access the index file with VS Code

    ```shell
    code index.html
    ```

<a id="development"></a>

## Documented Development Stage

This web page are developed purely on HTML, CSS, and Javascript. any external dependency comes in form of fonts and image files.

<a id="html"></a>

-   HTML

    HTML file is used as a framework for your web page display and used to structure your pages. This web page is structured using html and arranged using a semantic elements such as `<nav>`, `<header>`, , `<main>`, `<section>`, `<footer>`, and `<form>`.

    -   Navigation

        The navigation bar or the Nav bar is located topside of the page. It contains the logo, navigation links what switch into a hamburger menu when accessed on a mobile device, a search button, and a switch for dark-mode.

    -   Header

        The header is the first section to be seen when accessing the page. It contains a `div` that enclose `h1`, and `p` elements and a `div` with a class `.slides` that contains an array of images for a slideshow.

        ![Header Section](./assets/Capture-01.PNG "Header Section")

        ![Header Section Mobile](./assets/Capture-04.PNG "Header Section Mobile")

    -   Main

        The Main element is located below the `header` section and consist of five elements.

        -   About

            This first section contain a line up of cards that created using a `div` element. It is also displayed in a `grid`.

            ![About Section](./assets/Capture-05.PNG "About Section")

        -   History

            This Second section contain an `iframe`, `h2` and a `p` elements enclosed inside a `article` element.

            ![History Section](./assets/Capture-06.PNG "History Section")

        -   Product

            This Third section contain an asymmetrical grid of image that are contained inside a `div` element with a class `.grid-container`.

            ![Product Section](./assets/Capture-07.PNG "Product Section")

        -   Awards and Certificates

            This Fourth section contain a lineup of cards containing a `img` and `p` elements structured with a grid display

            ![Awards and Certificates Section](./assets/Capture-08.PNG "Awards and Certificates Section")

        -   Contact Us

            This Fifth and last main section contain an `iframe` and a `form` element that enclose a `div` elements that contain an `svg`, `input`, and a `button` elements.

    -   Footer

    The footer element located deep down the page and contain an `svg` with a link on it, a navigation links, and a single `p` element.

    ![Contact Us Section](./assets/Capture-09.PNG "Contact UsSection")

<a id="css"></a>

-   CSS

    All the styling, animation for the slideshow, and transition on the links was developed using CSS.

    ![Home Section](./assets/Capture-01.PNG "Home Section")

<a id="javascript"></a>

-   JavaScript

    The script that were used for this page is mainly only for the hamburger button, dark mode button, and form validation.

    ![JavaScript Functionality](./assets/Capture-10.PNG "JavaScript Functionality")

<a id="deployment-process"></a>

## Deployment Process

This web page is deployed using Vercel. Here is the proccess of deploying the web page and assigning it into a custom domain.

1. First of, go to the setting tab and access the domain section. from there input your custom domain inside the domain form.

    ![Add New Domain](./assets/SS13.PNG "Add New Domain")

2. go to [Vercel](https://vercel.com/) and log in using your Git Hub account to sync all your repo into vercel.

    ![Vercel Login](./assets/SS13.PNG "Vercel Login")

3. After logging in your account, pick one of your repo you want to deploy.

    ![Repo Deployment](./assets/SS22.PNG "Vercel Login")

4. After picking which repo you want to deploy, configure which framework you used and where are the root folder located.

    ![Deployment Configuration](./assets/SS23.PNG "Deployment Configuration")

5. Wait for Vercel to finish building up the web page. After it finished, your web page has been deployed and ready to be accessed.

    ![Deployment Finish](./assets/SS24.PNG "Deployment Finish")

After we've successfully deploy our web page, make sure to link it with a custom domain. here is the step to link a costom domain into our deployed web page.

1. First, First of, go to the setting tab and access the domain section. from there input your custom domain inside the domain form. After that, Vercel informs you that you need to input a specific data inside your DNS provider. from here we need a custom domain and DNS provider.

    ![Add New Domain](./assets/SS27.PNG "Add New Domain")

2. For this occasion we'll be using [Niagahoster](https://vercel.com/) for our domain provider

    ![Niagahoster Front Page](./assets/SS01.PNG "Niagahoster Front Page")

3. In this section, it is assumed that you have purchased a custom domain from Niagahoster. From the home page, access the domain menu and click the DNS Section.

    ![Assign New Domain](./assets/SS34.PNG "Assign New Domain")

4. Input all the data from vercel into the the Manage DNS Record forms and press "Add Record".

    ![Assign New Domain 2](./assets/SS30.PNG "Assign New Domain 2")

5. After that, your deployed web page will be connected to your new custom domain and ready to accessed using that domain.

    ![Deployment Complete](./assets/SS31.PNG "Deployment Complete")
