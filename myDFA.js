/*
	Joshua Oden
	7 April 2017
	Javascript functions following the state diagram of my language.
*/
var state = 0;
function DFA(input) //Main function for the minimum state deterministic finite automaton
	{
		
		switch (state) //Each case is one of the states.
		{
			case 0:
				if (input == 0)
				{
					state = 1;
					return"Current state = 1";
				}
				else if (input == 1)
				{
					state = 3;
					return"Current state = 3";
				}
				break;
			case 1:
				if (input == 0)
				{
					state = 2;
					return"Current state = 2";
				}
				else if (input == 1)
				{
					state = 0;
					return"Current state = 0";	
				}
				break;
			case 2: //FINAL STATE
				if (input == 0)
				{
					state = 1;
					return"Current state = 1";
					
				}
				else if (input == 1)
				{
					state = 5;
					return"Current state = 5"; //SEND TO BAD STATE	
				}
				break;
			case 3:
				if (input == 0) 
				{
					state = 4;
					return"Current state = 4";	
				}
				else if (input == 1)
				{
					state = 5;
					return"Current state = 5"; //SEND TO BAD STATE	
				}
				break;
			case 4:
				if (input == 0)
				{
					state = 1;
					return"Current state = 1";
				}
				else if (input == 1)
				{
					state = 3;
					return"Current state = 3";	
				}
				break;
			case 5: //BAD STATE
				if (input == 0 || input == 1)
				{	
					state = 5;
					return"Current state = 5";	
				}
				else
				{
					return"This is impossible to return.";
				}
				break;
			default:
				return "No string available to test in the DFA.";
				
		}
	}
function language() //Function to decide if the input has reached the final state or not.
	{
		if(state == 2)
		{
			return "This string belongs to the language!";
		}
		else if(state == 5)
		{
			return "This string will NEVER belong to the language.";
		}
		else
		{
			return"This string does NOT belong to the language...";
		}
	}
	