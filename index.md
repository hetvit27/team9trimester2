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
            width: 100%;
            margin-left: -90px;
            height: 80%;
        }
 
        .firsthalf {
            width: 50%;
            flex-direction: column;
            justify-content: center;
        }
 

        .left {
            width:
        }
 
        .secondhalf img {
            width: 50%;
            border: 4px solid #e2f2d1;
            border-radius: 150px;
            display: block;
            margin-left: 250px;
            position: relative;
            top: -160px;

        }
 
        .text-big {
            font-family: 'Piazzolla', serif;
            white-space: nowrap;
            font-weight: bold;
            font-size: 35px;
            margin-left: 250px;
            text-align: center;
        }
 
        .text-small {
            font-size: 30px;
        }
 
        .btn {
            background-color: #650f84; 
            border: 2px solid green; 
            color: white; 
            padding: 10px 24px; 
            cursor: pointer; 
            width: 70%; 
            height: 70%
            display: block; 
            margin-left: auto;
            text-align: center;
        }
 
        .btn-sm {
            padding: 6px 10px;
            vertical-align: left;
            margin-left: auto;
            text-align: center;
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
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
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

        #container {height: 100%; width:100%; font-size: 0;}

        #left, #middle, #right {display: inline-block; *display: inline; zoom: 1; vertical-align: top; font-size: 12px;}
        #left {width: 50%; background: blue;}
        #middle {width: 50%; background: green;}
        #right {width: 50%; background: yellow;}
}
    </style>
</head>

<body>
    <section class="firstsection">
        <div class="box-main center">
            <div class="firsthalf"> 
                <h1 class="text-big" id="web"> AP Physics C Units</h1>
                <a href="https://bgt072105.github.io/CSA-tri1-teamrepo/jupyter/2022/11/02/Kinematics.html"><button class="btn btn-sm"> Kinematics</button> </a>
                <a href="https://bgt072105.github.io/CSA-tri1-teamrepo/jupyter/2022/11/02/NewtonsLaws.html"><button class="btn btn-sm"> Newton's Laws</button> </a>
                <a href="https://bgt072105.github.io/CSA-tri1-teamrepo/jupyter/2022/11/02/Gravitation.html"><button class="btn btn-sm"> Gravitation</button> </a>
                <a href=" https://bgt072105.github.io/CSA-tri1-teamrepo/jupyter/2022/11/02/Electricforces.html"><button class="btn btn-sm"> Electric Forces</button> </a>
                <a href="https://bgt072105.github.io/CSA-tri1-teamrepo/physicsflashcards/"><button class="btn btn-sm"> Study Flashcards </button> </a>
            </div>
            <div class="secondhalf">
                <img title="Homepage Image" alt="Alt text" src="website.png" width="100" class="center">
            </div>
        </div>
    </section>
</body>
</html>