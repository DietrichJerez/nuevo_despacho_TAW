import { Router } from "express";

const router = Router()

router.get("/seguimiento", async (req, res) => {
    
    // Request body
    const body = {
        "reference": "27699451457",
        "transportOrderNumber": 99726299584,
        "rut": 77398220,
        "showTrackingEvents": 1
    };
    
    fetch('https://testservices.wschilexpress.com/transport-orders/api/v1.0/tracking', {
            method: 'POST',
            body: JSON.stringify(body),
            // Request headers
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': 'TU KEY',}
        })
        .then(response => response.json())
      .then(data => console.log(data));
    });
        
export default router