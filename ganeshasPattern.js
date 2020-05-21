ganeshasPattern = n => {
    // first line
    let firstLine = ""
	
    firstLine += "*";
    
    for (let i = 0; i < (n - 3) / 2; i++) {
        firstLine += " ";
    }
    
    for (let i = 0; i < (n + 1) / 2; i++) {
        firstLine += "*";
    }
    
    console.log(firstLine);
    
    // upper lines
    for (let i = 0; i < (n - 3) / 2; i++) {
        let upperLine = "";
        
        upperLine += "*";
        
        for (let j = 0; j < (n - 3) / 2; j++) {
            upperLine += " ";
        }
        
        upperLine += "*";
        
        for (let k = 0; k < ((n - 3) / 2) + 1; k++) {
            upperLine += " ";
        }
        
        console.log(upperLine);
    }
    
    // middle line
    let middleLine = "";
    
    for (let i = 0; i < n; i++) {
        middleLine += "*";
    }
    
    console.log(middleLine);
    
    // lower lines
    for (let i = 0; i < (n - 3) / 2; i++) {
        let lowerLine = "";
        
        for (let j = 0; j < ((n - 3) / 2) + 1; j++) {
            lowerLine += " ";
        }
        
        lowerLine += "*";
        
        for (let k = 0; k < (n - 3) / 2; k++) {
            lowerLine += " ";
        }
        
        lowerLine += "*";
        
        console.log(lowerLine);
    }
    
    // last line
    let lastLine = "";
    
    for (let i = 0; i < (n + 1) / 2; i++) {
        lastLine += "*";
    }
    
    for (let i = 0; i < (n - 3) / 2; i++) {
        lastLine += " ";
    }

    lastLine += "*";
    
    console.log(lastLine);
}

ganeshasPattern(11);
