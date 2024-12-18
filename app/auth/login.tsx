import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { loginUser } from "../../firebase/auth";

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill out all fields.");
            return;
        }

        setLoading(true);
        try {
            await loginUser(email, password);
            router.replace("/(tabs)");
        } catch (error: any) {
            Alert.alert("Login Failed", error.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title={loading ? "Loading..." : "Login"} onPress={handleLogin} />
            <Button
                title="Don't have an account? Register"
                onPress={() => router.push("/")} // Need to correct the redirection
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 20 },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 5 },
});
