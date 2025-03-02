import * as React from "react"

import { Card, CardContent } from "./ui/card"


import video1 from "../public/img/vid1.mp4"
import video2 from "../public/img/vid2.mp4"
import video3 from "../public/img/vid3.mp4"
import video4 from "../public/img/vid4.mp4"
import video5 from "../public/img/vid5.mp4"

export default function Gallery() {
  return (
<>


            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="min-w-[200px] max-h-[410px] object-cover rounded-lg"
                >
                  <source src={video3} type="video/mp4" />
                </video>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="min-w-[200px] max-h-[410px] object-cover rounded-lg"
                >
                  <source src={video4} type="video/mp4" />
                </video>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="min-w-[200px] max-h-[410px] object-cover rounded-lg"
                >
                  <source src={video5} type="video/mp4" />
                </video>
              </CardContent>
            </Card>

            <Card className="p-0">
              <CardContent className="flex items-center justify-center p-6">
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="min-w-[200px] max-h-[410px] object-cover rounded-lg"
                >
                  <source src={video1} type="video/mp4" />
                </video>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <video
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="min-w-[200px] max-h-[410px] object-cover rounded-lg"
                >
                  <source src={video2} type="video/mp4" />
                </video>
              </CardContent>
            </Card>
            </>
  )
}

