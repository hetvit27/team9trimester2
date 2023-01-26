---
layout: default
---
<html>
 <head>
    <title> JEHB Physics </title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
 
        .navbar {
            display: flex;
            align-items: center;
            justify-content: center;
            position: sticky;
            top: 0;
            cursor: pointer;
        }
 
        .background {
            background: #e2f2d1;
            background-blend-mode: darken;
            background-size: cover;
        }
 
        .nav-list {
            width: 70%;
            display: flex;
            align-items: center;
        }
 
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
        }
 
        .logo img {
            width: 180px;
            border-radius: 50px;
        }
 
        .nav-list li {
            list-style: none;
            padding: 26px 30px;
        }
 
        .nav-list li a {
            text-decoration: none;
            color: #e2f2d1;
        }
 
        .nav-list li a:hover {
            color: #e2f2d1;
        }
 
        .rightnav {
            width: 30%;
            text-align: left;
        }
 
        .firstsection {
            background-color:  #e2f2d1;  
            height: 400px;
        }
 
        .secondsection {
            background-color:  #e2f2d1; 
            height: 400px;
        }
 
        .box-main {
            display: flex;
            justify-content: center;
            align-items: center;
            color: black;
            max-width: 80%;
            margin-left: -90px;
            height: 80%;
        }
 
        .firsthalf {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
 
        .secondhalf {
            width: 30%;
        }
 
        .secondhalf img {
            width: 70%;
            border: 4px solid #e2f2d1;
            border-radius: 150px;
            display: block;
            margin-left: -90x;
        }
 
        .text-big {
            font-family: 'Piazzolla', serif;
            font-weight: bold;
            font-size: 35px;
            margin-left: auto;
            text-align: center;
        }
 
        .text-small {
            font-size: 18px;
        }
 
        .btn {
            background-color: #650f84; 
            border: 1px solid green; 
            color: white; 
            padding: 10px 24px; 
            cursor: pointer; 
            width: 50%; 
            display: block; 
        }
 
        .btn-sm {
            padding: 6px 10px;
            vertical-align: left;
        }
 
        .section {
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 90%;
            margin-left: -50px;
        }
 
        .section-Left {
            flex-direction: row-reverse;
        }
 
        .paras {
            padding: 0px 65px;
        }
 
        .thumbnail img {
            width: 250px;
            border: 2px solid white;
            border-radius: 26px;
            margin-top: 19px;
        }
 
        .center {
            text-align: center;
        }
 
        .text-footer {
            text-align: center;
            padding: 30px 0;
            font-family: 'Ubuntu', sans-serif;
            display: flex;
            justify-content: center;
            color: white;
        }
        .title {
        justify-content: center
        margin-left: 100px;


}
    </style>
</head>

<body>
    <section class="firstsection">
        <div class="box-main">
            <div class="firstHalf">
                <h1 class="title">Let's learn about centering text</h1> 
                <h1 class="text-big" id="web"> AP Physics C Units </h1>
                <a href="https://bgt072105.github.io/CSA-tri1-teamrepo/jupyter/2022/11/02/Kinematics.html"><button class="btn btn-sm"> Kinematics</button> </a>
                <a href="https://bgt072105.github.io/CSA-tri1-teamrepo/jupyter/2022/11/02/NewtonsLaws.html"><button class="btn btn-sm"> Newton's Laws</button> </a>
                <a href="https://bgt072105.github.io/CSA-tri1-teamrepo/jupyter/2022/11/02/Gravitation.html"><button class="btn btn-sm"> Gravitation</button> </a>
                <a href=" https://bgt072105.github.io/CSA-tri1-teamrepo/jupyter/2022/11/02/Electricforces.html"><button class="btn btn-sm"> Electric Forces</button> </a>
                <a href="https://bgt072105.github.io/CSA-tri1-teamrepo/physicsflashcards/"><button class="btn btn-sm"> Study Flashcards </button> </a>
            </div>
        </div>
    </section>
</body>

<img title="Homepage Image" alt="Alt text" src="website.png" width="100" class="center">

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

</html>