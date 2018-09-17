This is the Admin side of the project which is used by registered Restaurants.
Users place their orders from mobile application which are then recieved on admin side.

## Components: 
	## Login: 	(path: src/app/login)
		login component is used to login registered restaurant. It takes the restaurant's login credentials and check if that restaurant is registered or not. If registered then takes the admin to Members component.

	## Members: (path: src/ app/members)
		Members component keep records of number of the available tables at that moment and handle all the incoming order. It also keeps record of prepared orders. 
		

## Services: 
	## MemberService: (path: src/app/member.service.ts)
		Member Service class contains all the functions to get data from firebase which is then displayed in 	members component. 
	
	## AuthGuard: (path: src/app/auth.service.ts) 
		AuthGuard class checks weather the user is registerd or not. 