const axios = require('axios');
const ms = require('ms');

const base_url = "https://api.paste.ee/v1";

class Paste_ee {
    constructor(key) {
        this.key = key || "";
    }

    async new(data) {
        const headers = {
            "X-Auth-Token": this.key,
            "Content-Type": "application/json"
        };

        if (typeof data === "string") {
            data = { "contents": data };
        }

        const defaultExpire = "1d";

        let pasteData = {
            "encrypted": data.encrypted || false,
            "description": data.description || "",
            "expiration": ms(data.expire || defaultExpire) / 1000,
            "expiration_views": data.expire ? data.expire.views || "" : ""
        };

        if (data.sections && Array.isArray(data.sections)) {
            pasteData.sections = data.sections;
        } else {
            if (!data.contents) {
                throw new Error("content is required");
            }
            pasteData.sections = [{
                "name": data.name || "",
                "syntax": data.syntax || "autodetect",
                "contents": data.contents
            }];
        }

        try {
            const response = await axios.post(`${base_url}/pastes`, pasteData, {
                headers: headers,
            });
            return response.data;
        } catch (error) {
            return {
                status: false,
                message: error.response.statusText || "Something wrong"
            };
        }
    }

    async delete(id) {
        try {
            const response = await axios.delete(`${base_url}/pastes/${id}`, {
                headers: {
                    "X-Auth-Token": this.key
                }
            });
            return response.data;
        } catch (error) {
            return {
                status: false,
                message: error.response.statusText || "Something wrong"
            };
        }
    }

    async get(id) {
        try {
            const response = await axios.get(`${base_url}/pastes/${id}`, {
                headers: {
                    "X-Auth-Token": this.key
                }
            });
            return response.data;
        } catch (error) {
            return {
                status: false,
                message: error.response.statusText || "Something wrong"
            };
        }
    }

    async getList(display = 25, page = 1) {
        try {
            const response = await axios.get(`${base_url}/pastes?perpage=${display}&page=${page}`, {
                headers: {
                    "X-Auth-Token": this.key
                }
            });
            return response.data;
        } catch (error) {
            return {
                status: false,
                message: error.response.statusText || "Something wrong"
            };
        }
    }

    async syntaxList() {
        try {
            const response = await axios.get(`${base_url}/syntaxes`, {
                headers: {
                    "X-Auth-Token": this.key
                }
            });
            return response.data;
        } catch (error) {
            return {
                status: false,
                message: error.response.statusText || "Something wrong"
            };
        }
    }

    async syntax(id) {
        try {
            const response = await axios.get(`${base_url}/syntaxes/${id}`, {
                headers: {
                    "X-Auth-Token": this.key
                }
            });
            return response.data;
        } catch (error) {
            return {
                status: false,
                message: error.response.statusText || "Something wrong"
            };
        }
    }
}

module.exports = Paste_ee;
