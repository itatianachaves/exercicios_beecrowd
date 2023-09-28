let i = 0;

    while (i < lines.length - 1) {
        let [X, Y] = lines[i].split(' ').map(Number)

        if(X <= 0 || Y <= 0){
            break;
            }

        if (X < Y) {
            console.log('Crescente');
        } else if(X > Y){
            console.log('Decrescente');
        }

        if (X === Y) {
            break;
        }

        i++;
    }
