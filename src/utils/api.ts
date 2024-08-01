export async function fetchChatGPTResponse(apiKey: string, prompt: string): Promise<string> {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 150
        })
    })

    if (!response.ok) {
        throw new Error(`OpenAI API request failed: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0].message.content.trim()
}