var grid=[[0,0,0],[0,0,0],[0,0,0]];
var game_over=false;

function mark(){
    let cell_no=this.id;
    index=cell_no.slice(-1);

    if(grid[Math.floor(index/3)][index%3]!=0){
        alert('Already marked !');
        //  document.getElementById("game-status").innerHTML="Already Marked !";
    }
    else if(game_over)
        alert('Game is Over !');
    else{
        row=Math.floor(index/3);
        column=index%3;
        grid[row][column]=1;
        this.childNodes[0].innerHTML="X";
        let min=1;
        let fi,fj;
        let isfull=true;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(grid[i][j]==0){
                    isfull=false;
                    grid[i][j]=-1;
                    if(check(i,j)){
                        min=-1;
                        grid[i][j]=0;
                        fi=i;
                        fj=j;
                        break;
                    }

                    let temp=minimax(1);
                    //console.log(min);
                    grid[i][j]=0;
                    if(temp<=min){
                        min=temp;
                        fi=i;
                        fj=j;
                    }
                    console.log(i+' '+j+' '+temp);
                }
            }
        }

        if(isfull){
            document.getElementById("game-status").innerHTML="Draw!"
        }
        else{
            document.getElementById(`cell_${fi*3+fj}`).childNodes[0].innerHTML='0';
            grid[fi][fj]=-1;
            if(check(fi,fj)){
                document.getElementById("game-status").innerHTML="You Lost!";
                game_over=true;
            }            
        }
        
    }
}

function restart(){
    window.location.reload();
}

for(let i=0;i<9;i++){
    document.getElementById(`cell_${i}`).addEventListener('click',mark,false);
}

document.getElementById("game-restart").addEventListener('click',restart,false);

function same(a,b,c){
    if(a==b&&b==c)
        return true;
    else
        return false;
}

function check(row,column){
    if(same(grid[row][0],grid[row][1],grid[row][2])||same(grid[0][column],grid[1][column],grid[2][column]))
        return true;
    else if(row==column && row==1 && (same(grid[0][0],grid[1][1],grid[2][2])||same(grid[2][0],grid[1][1],grid[0][2])))
        return true;
    else if(row==column && same(grid[0][0],grid[1][1],grid[2][2]))
        return true;
    else if(Math.abs(row-column)==2 && same(grid[0][2],grid[1][1],grid[2][0]))
        return true;
    else
        return false;
}

function minimax(maximizer_on){

    let i,j;
    if(maximizer_on){
        let max=-1;
        let isfull=true; 
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                if(grid[i][j]==0){
                    isfull=false;
                    grid[i][j]=1;
                    if(check(i,j)){
                        grid[i][j]=0;
                        return 1;
                    }

                    max=Math.max(max,minimax(0));
                    //console.log(max)
                    grid[i][j]=0;
                    if(max==1)
                        return 1;

                }
            }
        }
        if(isfull)
            return 0;
        else
            return max;

    }
    else{
        let min=1;
        let isfull=true;
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                if(grid[i][j]==0){
                    isfull=false;
                    grid[i][j]=-1;
                    if(check(i,j)){
                        grid[i][j]=0;
                        return -1;
                    }
                    min=Math.min(min,minimax(1));
                    //console.log(min);
                    grid[i][j]=0;
                    if(min==-1)
                        return -1;
                }
            }
        }
        //console.log(min)
        if(isfull)
            return 0;
        else
            return min;

    }

}
