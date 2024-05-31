import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
import NotificationsIcon from '@mui/icons-material/Notifications';
export function WarningMessage({ msg }) {
	return (
		<div className="bg-dark-50 p-4 rounded-lg my-2">
			<WarningIcon /> 
            {msg}
		</div>
	);
}

export function NotificationMessage({ msg }){
    return (
		<div className="bg-dark-50 p-4 rounded-lg ">
			<NotificationsIcon /> 
            {msg}
		</div>
	);
}
