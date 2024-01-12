# Olá eu sou o Enzo Nascimento!

### Este é o repositorio que eu uso para guardar a resolução dos desafios da [Frontend Mentor](https://www.frontendmentor.io/challenges)

<div class="projeto">
    <div class="container">
        <a href="https://www.linkedin.com/in/enzo-nascimento-4843a42a8/"><img src="blog-preview-card-main/design/desktop-design.jpg" alt="blog-preview-card-main"></a>
        <div class="filtro"></div>
        <span class="texto">Visitar Página</span>
    </div>
</div>

<style>
        body {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            font: 500 1.2em sans-serif;
        }

        .projeto {
            max-width: max-content;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin-left: 50px;
        }

        .titulo {
            width: 100%;
            margin: 10px 0;
            padding: 10px 0;
            text-align: center;
            background-color: white;
            color: black;
            border: 1px solid black;
            border-radius: 20px;
        }

        .container {
            position: relative;
            border: 1px solid black;
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
        }

        .container a > img {
            display: block;
            width: 325px;
            transition: width 1s ease-in-out;
        }

        .texto {
            position: absolute;
            top: 50%;
            left: 50%;
            width: max-content;
            transform: translate(-50%, -50%);
            opacity: 0; 
            transition: opacity 0.3s ease-in-out;
            color: white;
        }

        .container:hover .texto {
            opacity: 1; 
        }

        .filtro {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            transform: translate(-50%, -50%);
            background-color: black;
            opacity: 0; 
            transition: opacity 0.3s ease-in-out;
        }

        .container:hover .filtro {
            opacity: 0.5;
        }
    
        .container:hover img{
            width: 300px;
        }
    </style>

