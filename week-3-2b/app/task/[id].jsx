import { useLocalSearchParams, Link } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Activity, useEffect, useState } from "react";

export default function TaskDetail() {
  const { id } = useLocalSearchParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [id])

  const loadData = async () => {
    try {
      const stored = await AsyncStorage.getItem("tasks");
      const tasks = stored ? JSON.parse(stored) : [];
      const foundTask = tasks.find((task) => task.id === id)
      setTask(foundTask)
      
    } catch (error) {
      console.log("Error loading task data:", error); 
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    )
  }

  if (!task) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{fontSize: 16, marginBottom: 10, fontWeight: 'bold', color: "red"}}>Task not found!</Text>

      <Link href="/">← Back</Link>
    </View>
    )
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{fontSize: 16, marginBottom: 10, fontWeight: 'bold'}}>Task ID: {task.id}</Text>
      <Text style={{fontSize: 16, marginBottom: 10, fontWeight: 'bold'}}>Task Title: {task.title}</Text>

      <Link href="/">← Back</Link>
    </View>
  );
}