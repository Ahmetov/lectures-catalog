package ahmetov.slearnbackend.web;

import ahmetov.slearnbackend.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;

@RestController
@RequestMapping("/report")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class ReportController {

    private final ReportService reportService;

    @PreAuthorize("hasAuthority('admin')")
    @GetMapping(path = "{id}", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<InputStreamResource> getLectureViewReport(@PathVariable int id) {
        ByteArrayInputStream bis = reportService.generateLectureViewReport();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "inline; filename=citiesreport.pdf");

        return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @PreAuthorize("hasAuthority('admin')")
    @GetMapping("/get")
    public String getIt() {
        return "hey";
    }
}
