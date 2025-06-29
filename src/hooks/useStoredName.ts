import { useEffect, useState } from "react";

export function useStoredName() {
  const [currentUserName, setCurrentUserName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const key= "username"

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) setCurrentUserName(stored);
  }, [key]);

  const saveName = () => {
    if (currentUserName) {
      localStorage.setItem(key, currentUserName);
    }else{
      localStorage.removeItem(key);
    }
    setIsEditing(false)
  }

  return {
    currentUserName,
    isEditing,
    saveName,
    setIsEditing,
    setCurrentUserName
  }
}
