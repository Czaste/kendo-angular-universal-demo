import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const baseUrl = "https://api.github.com/repos/telerik/kendo-ui-core/issues";

@Injectable()
export class GithubService {
    private headers = new Headers({
        // Generate your own token through
        // https://github.com/settings/tokens
        'Authorization': "token 51bd04fc" +
              "379eb9d4e1d88637acfde27e445b7161"
    });
    constructor(public http: Http) { }

    getGithubIssues(pages) {
        return Observable.forkJoin(this.getIssuesUrls(pages));
    }

    getIssuesUrls({ pages }) {
        const result = [];
        for (let index = 1; index < pages; index++) {
            result.push(
                this.http.get(`${baseUrl}?state=all&page=${index}&per_page=100`, { headers: this.headers })
                    .map(this.handleResponse)
            );
        }
        return result;
    }

    getGithubUser(username) {
        return this.http.get(`https://api.github.com/users/${username}`, { headers: this.headers })
            .map(this.handleResponse);
    }

    getInitialData() {
        return this.http.get(`http://localhost:3000/data.json`)
            .map((res) => {
                return res.json();
            });
    }

    getGithubIssue(id: number) {
        return this.http.get(`${baseUrl}/${id}`, { headers: this.headers })
            .map(this.handleResponse);
    }

    handleResponse(res: Response): any {
        return res.json();
    }
}