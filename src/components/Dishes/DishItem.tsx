import React from "react";
import { IDish } from "../../types";

export interface Props {
  dish: IDish;

}

const DishItem: React.FC<Props> = ({ dish }) => {
  let imageUrl =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVwAAACRCAMAAAC4yfDAAAAAilBMVEX////9/f3+/v4AAAD6+vrv7+/29vby8vLs7OwFBQX7+vtpaWn09PSLi4vKysqHh4fm5ubg4OCTk5O5ubnV1dV4eHi/v7+ysrLFxcWAgIBycnLW1tZnZ2eioqJiYmKbm5umpqZVVVUXFxcdHR01NTVNTU0/Pz8mJiY5OTkqKioeHh5EREQQEBBSUlLiJkNpAAAJPElEQVR4nO2bC3uaShOAZ5YBcVUCiBe8oc3lJG36///eN7NcRA3knO8c2trO+6QRECK8HWdnlwVAURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURRFURSlE4Om/Gk2GLfBlIsfH4TU9Y7SJiBC/mnkslhWR2QBG8k38P6oej/DgJUXltVsQSebtwF2RChLlxfV+wkGprOHfA/nrMA+wc/m+2IdTQ18GKEG1ot8kZBFtduFS66Qe553gNIgxy9aM5p99RxvD0mZki8PQwjl3TWgyu3EcGaFpeeNvUktl9MDRV/Y3Hg85u2ed8SbzEABHERupHmhB8mu8dcLuUgwF7Nl5MpLYTg+W6HLcYyFp3I/w3CbdXKeGrkWEuf2dbac7w9ucWWw7ZZXMmdd5fYgjRUU7vvfilx7EqHpSIoFu/7CGh9DOMuVMPafPJcyVG43iAFF5de/kUuwFrc5ECdadAnZ81JJzSW8jWAhblVuLxy30yfPe9lcNGgHXvsq/QqWa6XlGntvAdWhy5ppzpsWj5oWeuEKVmJwnbrIrbbFEqoFBFLd8g6udfPW9iwX43fPewo053YjnVpnjjNA3pILR7GWSFIQgEaSdR/qaoGFB9ICZqA5txvOnEgSpU8+PDRyWdVGtkFr1OaZN3yv0wJXaqn37qVALnI7h3X+bNxAzXf5xkNbLgQvvLKBRhpCyju9+9UaQcSrJ4ulXFC5H4FcF8zYExcCF3Jdt/bYliapw4vl+y+VQsgt4DjhZk3ldsNZgWsu75s0XA+uWhCM9CBkzKDlzJVmTiMrNRPed8URrHJ7CCiQsZlEumRtuWLcy1rOMJNyYek0kjmWuxqjcnsgV8CupEd2IXfu5LZ2xK3ndpTqgiSu30IZC1O5XcgQ4oqV7dgxL7ZzblmJtauApJFrAqkc1jJwpnI7YaFShb2PMDAfyY3P0kwtV4YXpAWccaFhVW4nluuwF1eFyY2wa7ljJ7feF2u5FMCSF56nAcgApMrtAMml2Qe2fCNXsgU3cy25LufOwQbhX7yw5VZNyrKmE6F2LyGSnsCjRHAgcme1XF5eVtVCLQ1NJHIjnBppAY/1LUtbypUbm+q3DdFXicGQ8cNwRDK2sCPfj6emHAaPzncrq+IsNih1xGEUh7EcF7rxneWIl3T+QhvOmNUNnJpxtbYACquq9jw67ooz35UX7WMaQkM9H/anIXLHJeV9yPH4vRz9zgF8GQRL4Tx+65IGd+TKbFz+X5QHlsd6PmHvx/1hlKMu7cgd15ELeJJOMeBZ7rMbyaGySLsI9xJfxx3bUDBLZw1p+syinopZms9ZajkIVs5ikvYqeHftGGGUu90fSmSA3dvw+iLonk/2B3Ljomi6v6y0qrycXJkt5u5EtO9QVoxdnVv+veHP+W6QuzdozrgR20k5+wYpkDu7ryzXouViDWR142bdlMixXEvgWa7S5rr0P8uVzvDR3VnnPEAyZSSVtcxVs21Ubhe9cl3ojr0998Q443Kp8C7jOyr3/wMrueQ6DuWNHDb3dFwu00dZfI/N1XS7Rq42ZZ8gk26k+4uVXKSjhGtdpLFCunbYyCVQub2Ucg/VIAHnBWvmVd9CatkvnHCv41PklreDUDsQvSDMN4tNgabqC1BAJllUkfs4C9DeCJTcvMgXm0TnPt9AFt1EsGa6s3upmznjCtcgKtLZfhtAOfPm49xqLOi4whUBSuNVjxVeFAFQbamUk5QJ0CkXdczmhup7TtfOTLMuz/NwJ0Jmmcv9MmoF9gXmtuf2p4Ow+f78nPt4VWK15bpOHJEfy+g4rA6jj91ufsgJ/0JcVPt4hdtInh/Gy1cM5LYCyZNS6CbgEicMkvLKWHJ9CJinrjg7hYFxsyLJUvn0iUzvZzzo+qDzB/5UGf81ppr92QmxE0LwKN6cVtbEm122xunssAoCeQBtvjzlI8TjKQ3Cw/Pc4DR9KSg7bDKII6I4CqPicEQIN6fM6/2g+7TbG5jud+/1Wo//Rjymv7JwMQ+/ZcnkBLtVONuzePK9WbyawKKI58+0X2x52/KURKckOWXRAnD9sPWW8WRJr1Gce/C52/7Q/knuTR+dp1pdUN/1cuROdodTRNE0LtJ5AbjdbU9+mJy4+QpGT5wePHyCACbZciZ1QziBwxYh2mxzoHW63SCsZ/M9WPhbcnu/Sd2X+LPcfnZF/ZeL6IVxTAZz6T0UawriSfaWLxb5lAyNXjlnfIk33I4dVyyXd4938BITJpMkB9aaPQBFRbFy+eVfncpP0/vvDPZeDYoTMnNu61fFMkezPmx3/JErKWt9kftIbxy5p0QaNDThAQ6ZgWyTLIBW6TbnyE2X/NZ/IrfzNO9SLhkPrLW4/ZYsv+9o87A/THCxT3J5agdHb9x38CBPk+IA610izwEeaPs94rQbv2TRa5otkNYzeFknE5V7DeGKf1sMok0xXYVxtEwmFBSLFQVSjM05567QrDZHXjuuOJinc4JtnieGsjyVaoEwjIw/W4TL4c7yTuW6tIsSwTLldvuc+PnRjR1a1zEDucHjOrbu+mTnarCXygpXsFUH2Q54kncq19ZO5MGTbHfYn7daR+n/orBrWlJ5W/ao/w3Fvcqtz156uK5vFtyUb7Xcujw5Lw7o8+r07lmunD/3c4k7ZvZarjGmXSNdiv4x3Ltcdw3oxr5+QX4Dub8uKndAVO6AqNwBUbkDonIHROUOiModEJU7HL9DD+2XReUOiModkgHtqlyVOyAqd0BU7oCo3AFRuQOicgdE5Q6Iyh0QlTsgKndAVO6AqNwBUbkDonIHROUOiModEJU7IHcvt5xIbolkoi5jgyCgK3gnQnJ7tbBkh5xXjncrt7ZS6QoumTaU6/U+l8pltZrnP9BZ3p1c24Rq5ZQVjgT/zPW629K8IZy1u/i1wwi+T7mtYK0khpf4n8KGz1Gtckvabl3M+jd2G4F9ouvoVbkt2imhygiXctsGu2PYHaxyr2gn3Do5TOu8+xmtlo6atk5zbkMpgpshbGXe24Khm1YpVlZnKrfBVo9JnuuGqny9LGKbb/v1LrZ8o/pTLQY41/uU656CvDR3YfFabe3uUqTK/TvYHn7YSXzAbyP3w40qd1h++BO/F5/9m8m9calyf09U7oCo3AH5Z3L/B+pspjvZ0ZcbAAAAAElFTkSuQmCC";

  const imageStyle = {
    background: `url(${ imageUrl}) center center / cover no-repeat `,
  };

  return (
    <div className="card mb-3">
      <div className="row justify-content-between">
        {dish.name.length > 0 ? ('') : <div className="col-5" style={imageStyle}/>}

        <div className="col-3"><h5 className="card-title">{dish.category}</h5></div>
        <div className="col-6">
          <h5 className="card-title">{dish.name}</h5>
          <p className="card-text">{dish.email}.</p>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
