'''
# How to create a Bread Jam Sandwich
START
1. Buy Bread 
2. Buy Jam
2.1 Take one bread out and put it on plate
3. Apply Jam on bread
3.1 Take another bread out and put it on top of the jam applied bread
Eat. Enjoy. 
END. 

Start -> Buy Bread || Buy Jam If not available -> Take one bread out and put it on plate -> Apply Jam on bread -> Take another bread out and put it on top of the jam applied bread -> Eat. Enjoy. -> End
'''
# BOOLEEN - 0 AND 1 = FALSE and TRUE

IF (we did not had any bread):
    Buy Bread
ELSE:
    Continue

IF (we did not had any jam):
    Buy Jam
ELSE:
    Continue

Open the bread and jam packets.
Take one bread out and put it on plate

IF (the bread is not fresh):
    Buy fresh bread
ELSE:
    Continue

if (there is bread on plate):    
    Apply Jam on bread
else:
    Take another bread out and put it on plate
    Apply Jam on bread  
elif:
    Take another bread out and put it on top of the jam applied bread
    
    
and, or, not, ==, !=, <, >, <=, >=


###################################
if (raining and cold): # && is and in other languages like C, C++
    Take umbrella and jacket
        
if (raining or snowing): # || is or in other languages like C, C++
    Take umbrella

# not in python
if (!raining && !cold || hot): # ! is not in other languages like C, C++
    Wear normal clothes
###################################
