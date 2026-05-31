
            const canvas = document.getElementById('flappy-canvas');
            const ctx = canvas.getContext('2d');
            let bird = { y: 150, vy: 0, gravity: 0.15, jump: -3.5, r: 8 };

            canvas.addEventListener('click', () => {
                bird.vy = bird.jump;
            });

            function run() {
                bird.vy += bird.gravity;
                bird.y += bird.vy;
                
                if (bird.y > canvas.height) {
                    bird.y = 150;
                    bird.vy = 0;
                }

                ctx.clearRect(0,0,canvas.width,canvas.height);
                
                ctx.beginPath();
                ctx.arc(100, bird.y, bird.r, 0, Math.PI*2);
                ctx.fillStyle = '#ff007f';
                ctx.fill();
                
                requestAnimationFrame(run);
            }
            run();
        