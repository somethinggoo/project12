function preload()
{

}
function setup()
{
    canvas=createCanvas(600,400);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

}
function draw()
    {
image(video,0,0,600,400);
    function take_snapshot()
        circle= circle(100,100);
        save('hello.png');

    }